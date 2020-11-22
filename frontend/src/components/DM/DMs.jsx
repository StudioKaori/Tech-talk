import { useState, useEffect, Component } from "react";
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

  const getAll = (resData) => {
    const url =
      "/directMessages/one?senderId=" +
      user.id +
      "&receiverId=" +
      dmReceiver.id;
    Api.get(url)
      .then((res) => {
        setDms(res.data, resData);
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
        //setDms([...dms, res.data]);
        getAll(res.data);
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
      .then((res) => {})
      .catch((e) => console.log("markUnread catch"));
  };

  useEffect(() => {
    getAll();
    markUnread();
  }, []);

  useEffect(() => {
    if (dms.length !== 0) {
      scrollToTheEnd();
      setStatus(1);
    }
  }, [dms]);

  useEffect(() => {
    scrollToTheEnd();
  }, [status]);

  const scrollToTheEnd = () => {
    // to scroll to the end
    let target = document.getElementById("dm-one-list");
    target.scrollTop = target.scrollHeight;
    console.log("target", target.scrollHeight);
  };

  return (
    <section className="dm-list">
      <div className="dm_title_flex"></div>
      <div className="dm_title_flex">
        <div>
          <h4>{dmReceiver.name}</h4>
        </div>
        <div className="close-button-wrapper">
          <button
            className="close-button"
            onClick={() => setIsShowDMForm(false)}
          >
            <i class="fas fa-times-circle"></i>
          </button>
        </div>
      </div>
      <div id="dm-one-list" className="dm-one-list">
        <div id="scroll-inner">
          {dms.map((dm) => (
            <DMCard key={dm.id} dm={[dm]} />
          ))}
        </div>
      </div>
      <DMForm onClickSendDM={sendDM} />
    </section>
  );
}
