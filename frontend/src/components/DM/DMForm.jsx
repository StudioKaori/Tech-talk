import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { dmReceiverState, userState } from "../../js/state-information";

export default function DMForm({ onClickSendDM }) {
  const [body, setBody] = useState("");
  const [dmReceiver, setDmReceiver] = useRecoilState(dmReceiverState);
  const [user, setUser] = useRecoilState(userState);

  return (
    <section className="dm-form">
      <div className="comment-post">
        <input
          type="text"
          placeholder="Direct Message..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          className="button-s"
          onClick={() => {
            onClickSendDM(body);
            setBody("");
          }}
        >
          <i className="fas fa-reply"></i>
        </button>
      </div>
    </section>
  );
}
