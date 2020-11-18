import React, { useReducer, useState } from "react";
import CommentsUpdateForm from "./CommentsUpdateForm";

export default function CommentCard({ comment, onDeleteClick, onUpdateClick, user }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [body, setBody] = useState("");

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  console.log(comment);

  return isUpdating ? (
    <CommentsUpdateForm
      oldComment={comment}
      onUpdateClick={(updatedComment) => {
        setIsUpdating(false);
        onUpdateClick(updatedComment);
      }}
    />
  ) : (
    <div className="card mt-4">
      <div className="card-body">
        <h4>{comment.id}</h4>

        <p>{comment.body}</p>
        <p>name : {comment.user.name}</p>
        <p>email : {comment.user.email}</p>

        <div className="form-group">
          <label>Comment: </label>
          <input
            type="text"
            className="form-control"
            placeholder="What do you think about this"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-info"
            onClick={() => console.log({ body })}
          >
            Share
          </button>
        </div>

        <div>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteClick(comment)}
          >
            Delete
          </button>

          <button className="btn btn-warning" onClick={handleUpdateClick}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
