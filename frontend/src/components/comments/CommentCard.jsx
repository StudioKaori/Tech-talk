import React, { useState } from "react";
import CommentsUpdateForm from "./CommentsUpdateForm";

export default function CommentCard({ comment, onDeleteClick, onUpdateClick, user }) {
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

      <div className="one-post card mt-4">
        <div className="card-body">

         <h5><i class="fas fa-comments"></i> {comment.body}</h5>

         <div className="poster">
          <i class="fas fa-user-alt"></i> {comment.user.name}(
          <i class="fas fa-envelope"></i> {comment.user.email})
         </div>
         

          {comment.user.id === user.id ? (
            <div>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteClick(comment)}
              >
                Delete
          </button>

              <button className="btn btn-warning" onClick={handleUpdateClick}>
                Edit
          </button>
            </div>
          ) : null}

          {/* <div>
                 <button className="one-comment-button">
                   <i class="fas fa-thumbs-up"></i> {comment.reaction.numLike}
                 </button>
                <button className="one-comment-button">
                  <i class="fas fa-thumbs-down"></i> {comment.reaction.numDislike}
                </button>
          </div> */}


      </div>
      </div>
    );
}

