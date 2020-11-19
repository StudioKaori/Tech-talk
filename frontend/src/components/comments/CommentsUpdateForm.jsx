import React, { useState } from "react";

export default function CommentsUpdateForm({ oldComment, onUpdateClick }) {
  const [body, setBody] = useState(oldComment.body);

  return (
    <div className="quick-post">
      <div className="card-body">
        <h4 className="card-title">What else do you wanna add?</h4>
        <div>
          <div className="">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-warning"
              onClick={() => onUpdateClick({ ...oldComment, body })}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
