import React, { useState } from "react";
import CommentsUpdateForm from "./CommentsUpdateForm";
import Api from "../../api/Api";

import { useRecoilState } from "recoil";
import { isShowDMFormState, dmReceiverState } from "../../js/state-information";

export default function CommentCard({
  comment,
  onDeleteClick,
  onUpdateClick,
  user,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [body, setBody] = useState("");
  const [reaction, setReaction] = useState(comment.reaction);
  const [dmReceiver, setDmReceiver] = useRecoilState(dmReceiverState);
  const [isShowDMForm, setIsShowDMForm] = useRecoilState(isShowDMFormState);

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  const incrementLike = () => {
    const url = "/reactions/" + reaction.id + "?incrementTarget=like";
    Api.put(url, reaction).then((r) => {
      setReaction(r.data);
    });
  };

  const incrementDislike = () => {
    const url = "/reactions/" + reaction.id + "?incrementTarget=dislike";
    Api.put(url, reaction).then((r) => {
      setReaction(r.data);
    });
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
      {comment.user.id !== user.id ? (
        <div className="comment-poster">
          <i className="fas fa-user-alt"></i> {comment.user.name}
          <button
            onClick={() => {
              setIsShowDMForm(true);
              setDmReceiver(comment.user);
            }}
          >
            <i className="fas fa-envelope"></i> DM
          </button>
        </div>
      ) : (
        <div className="comment-poster">
          <i className="fas fa-user-alt"></i> {comment.user.name}{" "}
          <span className="fontXXS">(You)</span>
        </div>
      )}

      <div className="one-comment">
        <div className="comment-text">
          <i className="far fa-comment"></i> {comment.body}
        </div>
        <div className="comment-option">
          <div className="comment-option-reaction">
            <button className="one-comment-button" onClick={incrementLike}>
              <i className="fas fa-thumbs-up"></i> {reaction.numLike}
            </button>
            <button className="one-comment-button" onClick={incrementDislike}>
              <i className="fas fa-thumbs-down"></i> {reaction.numDislike}
            </button>
            <div className="comment-option-email">
              <i className="fas fa-envelope"></i> {comment.user.email}
            </div>
          </div>

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
