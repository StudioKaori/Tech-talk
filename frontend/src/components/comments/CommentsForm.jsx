import React, { useEffect, useState } from "react";

export default function CommentsForm({ onCreateClick }) {
  const [body, setBody] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Share your comments?</h4>
        <div>
          <div className="form-group">
            <label>Comment: </label>
            <input
              type="text"
              className="form-control"
              placeholder="What is on your mind?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-info"
              onClick={() => onCreateClick({ body })}
            >
              Share
            </button>
          </div>
          </div>
          </div>
          </div>
      
   
  );
}
