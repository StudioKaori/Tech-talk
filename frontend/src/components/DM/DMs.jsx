import { useState, useEffect } from "react";
import Api from "../../api/Api";
import DMForm from "./DMForm";
import DMCard from "./DMCard";
import "../../css/dm.css";

import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

export default function DMs({ dmReceiver }) {
  const [status, setStatus] = useState(0);
  const [dms, setDms] = useState([]);
  const [user, setUser] = useRecoilState(userState);

  const getAll = () => {
    const url =
      "/directMessages/one?senderId=" +
      user.id +
      "&receiverId=" +
      dmReceiver.id;
    Api.get(url)
      .then((res) => {
        setDms(res.data);
        console.log("dms", dms);
      })
      .catch((e) => console.log("no message"));
  };

  console.log("dms", dms);

  const sendDM = (body) => {
    if (body !== "body") {
      let postData = {};
      postData.message = body;
      postData.sender = user;
      postData.receiver = dmReceiver;

      Api.post("/directMessages", postData).then((res) => {
        setDms([res.data, ...dms]);
      });
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    console.log(dms);
    if (dms.length !== 0) {
      setStatus(1);
    }
  }, [dms]);

  return (
    <section className="dm-list">
      <div className="dm-one-list">
        {status === 1 ? (
          dms.map((dm) => <DMCard key={dm.id} dm={[dm]} />)
        ) : (
          <h6>loading...</h6>
        )}
      </div>

      <DMForm onClickSendDM={sendDM} />
    </section>
  );
}
