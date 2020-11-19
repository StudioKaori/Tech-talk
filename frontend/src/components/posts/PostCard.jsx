import React, { useReducer, useState } from "react";
import PostUpdateForm from "./PostUpdateForm";
import Api from "../../api/Api";

export default function PostCard({ post, onDeleteClick, onUpdateClick, user }) {
  console.log("PostCard?");

  const [isUpdating, setIsUpdating] = useState(false);
  const [body, setBody] = useState("");
  const [reaction, setReaction] = useState(post.reaction);

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  const incrementLike = () => {
    console.log("like?");
    const url = "/reactions/" + reaction.id + "?incrementTarget=like";
    Api.put(url, reaction).then((r) => {
      console.log("like", r);
      setReaction(r.data);
    });
  };

  const incrementDislike = () => {
    console.log("dislike?");
    const url = "/reactions/" + reaction.id + "?incrementTarget=dislike";
    Api.put(url, reaction).then((r) => {
      console.log("dislike", r);
      setReaction(r.data);
    });
  };

  return isUpdating ? (
    <PostUpdateForm
      oldPost={post}
      onUpdateClick={(updatedPost) => {
        setIsUpdating(false);
        onUpdateClick(updatedPost);
      }}
    />
  ) : (
    <article className="one-post">
      {/* 1-1 Post part */}
      <section className="post">
        <h4>
          <i class="fas fa-newspaper"></i>{" "}
          {post.body.length > 55
            ? post.body.substring(0, 55) + "..."
            : post.body}
        </h4>
        <div className="poster">
          <i class="fas fa-user-alt"></i> {post.user.name}(
          <i class="fas fa-envelope"></i> {post.user.email})
        </div>
        <div className="post-text">
          <p>{post.body}</p>
        </div>
        <div className="post-menu">
          <div className="reaction">
            <button onClick={incrementLike}>
              <i class="fas fa-thumbs-up"></i> {reaction.numLike}
            </button>
            <button onClick={incrementDislike}>
              <i class="fas fa-thumbs-down"></i> {reaction.numDislike}
            </button>
          </div>

          {post.user.id === user.id ? (
            <div className="post-option">
              <button onClick={() => onDeleteClick(post)}>
                <i class="fas fa-trash-alt"></i> Delete
              </button>

              <button onClick={handleUpdateClick}>
                <i class="fas fa-edit"></i> Edit
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {/* 1-2 Comments to the post part */}
      <section className="comments">
        <h6>
          <i class="fas fa-comments"></i> Comments
        </h6>

        {/* 1-2-1 comment input */}
        <div className="comment-post">
          <input
            type="text"
            placeholder="What do you think about this?"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button>
            <i class="fas fa-reply"></i>
          </button>
        </div>

        {/* 1-2-1 One comment */}
        <article className="comment">
          <div className="comment-poster">
            <i class="fas fa-user-alt"></i> Leo
            <button>
              <i class="fas fa-envelope"></i> MAIL
            </button>
          </div>

          <div className="one-comment">
            <div className="comment-text">
              <i class="far fa-comment"></i> Wow! great!
            </div>
            <div>
              <button className="one-comment-button">
                <i class="fas fa-thumbs-up"></i> 1
              </button>
              <button className="one-comment-button">
                <i class="fas fa-thumbs-down"></i> 0
              </button>
            </div>
          </div>
        </article>
      </section>
    </article>
  );
}
