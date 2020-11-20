import React, { useState } from "react";

export default function DMForm({ onSendDMClick }) {
  const [body, setBody] = useState("");

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
        <button onClick={() => onSendDMClick({ body, receiver })}>
          <i className="fas fa-reply"></i>
        </button>
      </div>
    </section>
  );
}
