import React, { useState } from "react";

export default function CommentsForm({ onCreateClick }) {
  const [body, setBody] = useState("");

  return (
    <div className="comment-post">
      <input
        type="text"
        placeholder="What do you think about this?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        className="button-s"
        onClick={() => {
          onCreateClick({ body });
          setBody("");
        }}
      >
        <i className="fas fa-reply"></i>
      </button>
    </div>
  );
}
