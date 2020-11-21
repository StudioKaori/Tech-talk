import { useState, useEffect } from "react";
import Api from "../../api/Api";
import DMForm from "./DMForm";
import DMCard from "./DMCard";

import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

export default function DMs({ dmReceiver }) {
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

  return (
    <section className="comments">
      <DMForm onClickSendDM={sendDM} />

      <div className="dm-one-list">
        {dms.map((dm) => (
          <DMCard key={dm.id} dm={[dm]} />
        ))}
      </div>
    </section>
  );
}
