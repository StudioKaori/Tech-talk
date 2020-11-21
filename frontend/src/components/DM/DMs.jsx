import { useState, useEffect } from "react";
import Api from "../../api/Api";
import DMForm from "./DMForm";
import DMCard from "./DMCard";
import "../../css/dm.css";

import { useRecoilState } from "recoil";
import { isShowDMFormState, userState } from "../../js/state-information";

export default function DMs({ dmReceiver }) {
  const [status, setStatus] = useState(0);
  const [dms, setDms] = useState([]);
  const [user, setUser] = useRecoilState(userState);
  const [isShowDMForm, setIsShowDMForm] = useRecoilState(isShowDMFormState);

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
        setDms([...dms, res.data]);
      });
    }
  };

  const markUnread = () => {
    const url =
      "/directMessages/markRead?senderId=" +
      dmReceiver.id +
      "&receiverId=" +
      user.id;
    Api.put(url)
      .then((res) => {
        console.log("markUnread", res);
      })
      .catch((e) => console.log("markUnread catch"));
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    if (dms.length !== 0) {
      setStatus(1);
      // to scroll to the end
      let target = document.getElementById("scroll-inner");
      target.scrollIntoView(false);

      markUnread();
    }
  }, [dms]);

  return (
    <section className="dm-list">
      <div className="close-button-wrapper">
        <button className="close-button" onClick={() => setIsShowDMForm(false)}>
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
      <div id="dm-one-list" className="dm-one-list">
        <div id="scroll-inner">
          {status === 1 ? (
            dms.map((dm) => <DMCard key={dm.id} dm={[dm]} />)
          ) : (
            <h6>loading...</h6>
          )}
        </div>
      </div>

      <DMForm onClickSendDM={sendDM} />
    </section>
  );
}
