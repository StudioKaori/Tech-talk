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

  console.log("comment", comment);

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
        <i class="fas fa-user-alt"></i> {comment.user.name}
      </div>

      <div className="one-comment">
        <div className="comment-text">
          <i class="far fa-comment"></i> {comment.body}
        </div>
        <div className="comment-option">
          <button className="one-comment-button">
            <i class="fas fa-thumbs-up"></i> 1
          </button>
          <button className="one-comment-button">
            <i class="fas fa-thumbs-down"></i> 0
          </button>
          <i class="fas fa-envelope"></i> {comment.user.email}
          {comment.user.id === user.id ? (
            <div className="comment-edit">
              <button
                className="one-comment-button"
                onClick={() => onDeleteClick(comment)}
              >
                <i class="fas fa-trash-alt"></i> Delete
              </button>

              <button
                className="one-comment-button"
                onClick={handleUpdateClick}
              >
                <i class="fas fa-edit"> </i>Edit
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
