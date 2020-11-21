import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Api from "../../api/Api";
import { isShowDMFormState, dmReceiverState } from "../../js/state-information";

export default function DMForm({ user }) {
  const [body, setBody] = useState("");
  const [dmReceiver, setDmReceiver] = useRecoilState(dmReceiverState);
  const [isShowDMForm, setIsShowDMForm] = useRecoilState(isShowDMFormState);

  const sendDM = () => {
    if (body !== "") {
      let postData = {};
      postData.message = body;
      postData.sender = user;
      postData.receiver = dmReceiver;
      setIsShowDMForm(false);
      setBody("");

      Api.post("/directMessages", postData).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <section className="dm-form">
      <div className="comment-post">
        <h6>Send DM</h6>
        <input
          type="text"
          placeholder="Direct Message..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={() => sendDM()}>
          <i className="fas fa-reply"></i>
        </button>

        <div>
          <button onClick={() => setIsShowDMForm(false)}>close</button>
        </div>
      </div>
    </section>
  );
}
