import React, { useState } from "react";
import CommentsUpdateForm from "./CommentsUpdateForm";

export default function CommentCard({
  comment,
  onDeleteClick,
  onUpdateClick,
  user,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [body, setBody] = useState("");

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  return isUpdating ? (
    <CommentsUpdateForm
      oldComment={comment}
      onUpdateClick={(updatedComment) => {
        setIsUpdating(false);
        onUpdateClick(updatedComment);
      }}
    />
  ) : (
    <article className="comment">
      <div className="comment-poster">
        <i className="fas fa-user-alt"></i> {comment.user.name}
      </div>

      <div className="one-comment">
        <div className="comment-text">
          <i className="far fa-comment"></i> {comment.body}
        </div>
        <div className="comment-option">
          <button className="one-comment-button">
            <i className="fas fa-thumbs-up"></i> 1
          </button>
          <button className="one-comment-button">
            <i className="fas fa-thumbs-down"></i> 0
          </button>
          <i className="fas fa-envelope"></i> {comment.user.email}
          {comment.user.id === user.id ? (
            <div className="comment-edit">
              <button
                className="one-comment-button"
                onClick={() => onDeleteClick(comment)}
              >
                <i className="fas fa-trash-alt"></i> Delete
              </button>

              <button
                className="one-comment-button"
                onClick={handleUpdateClick}
              >
                <i className="fas fa-edit"> </i>Edit
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
