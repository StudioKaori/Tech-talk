import React, { useState } from "react";

export default function PostUpdateForm({ oldPost, onUpdateClick }) {
  const [body, setBody] = useState(oldPost.body);

  return (
    <section className="quick-post">
      <h4>What else do you wanna add?</h4>
      <div>
        <textarea
          className="form-control"
          placeholder="Name"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button
          className="btn btn-info"
          onClick={() => onUpdateClick({ ...oldPost, body })}
        >
          <i className="fas fa-share-alt"></i> UPDATE
        </button>
      </div>
    </section>
  );
}
