import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  isShowDMFormState,
  dmReceiverState,
  userState,
} from "../../js/state-information";

export default function DMForm({ onClickSendDM }) {
  const [body, setBody] = useState("");
  const [dmReceiver, setDmReceiver] = useRecoilState(dmReceiverState);
  const [isShowDMForm, setIsShowDMForm] = useRecoilState(isShowDMFormState);
  const [user, setUser] = useRecoilState(userState);

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
        <button
          onClick={() => {
            onClickSendDM(body);
            setBody("");
          }}
        >
          <i className="fas fa-reply"></i>
        </button>

        <div>
          <button onClick={() => setIsShowDMForm(false)}>close</button>
        </div>
      </div>
    </section>
  );
}
