import { useState, useEffect } from "react";
import Api from "../../api/Api";
import DMForm from "./DMForm";
import DMCard from "./DMCard";
import "../../css/dm.css";

import { useRecoilState } from "recoil";
import {
  isShowDMFormState,
  dmReceiverState,
  userState,
} from "../../js/state-information";

export default function DMs() {
  const [status, setStatus] = useState(0);
  const [dms, setDms] = useState([]);
  const [user, setUser] = useRecoilState(userState);
  const [isShowDMForm, setIsShowDMForm] = useRecoilState(isShowDMFormState);
  const [dmReceiver, setDmReceiver] = useRecoilState(dmReceiverState);

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
      markUnread();
    }
  };

  //unmark read when send DM and close the DMs(this component)
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

  // for notification
  const interval = 2000;
  useEffect(() => {
    const dmTimer = setInterval(() => {
      findNewDm();
    }, interval);

    return () => {
      clearInterval(dmTimer);
    };
  }, []);

  const findNewDm = (resData) => {
    const url =
      "/directMessages/findNewDm?userId=" +
      user.id +
      "&dmReceiverId=" +
      dmReceiver.id;
    Api.get(url)
      .then((res) => {
        if (res.data.length !== 0) {
          getAll();
        }
      })
      .catch((e) => console.log("no new message"));
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
            onClick={() => {
              markUnread();
              setIsShowDMForm(false);
            }}
          >
            <i className="fas fa-times-circle"></i>
          </button>
        </div>
      </div>
      <div id="dm-one-list" className="dm-one-list">
        <div id="scroll-inner">
          {status === 1
            ? dms.map((dm) => <DMCard key={dm.id} dm={[dm]} />)
            : null}
        </div>
      </div>
      <DMForm onClickSendDM={sendDM} />
    </section>
  );
}
