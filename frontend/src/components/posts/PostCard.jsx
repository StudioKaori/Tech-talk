import React, { useReducer, useState } from "react";
import PostUpdateForm from "./PostUpdateForm";

export default function PostCard({ post, onDeleteClick, onUpdateClick, user }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [body, setBody] = useState("");

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  console.log(post);

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
            <button>
              <i class="fas fa-thumbs-up"></i> {post.reaction.numLike}
            </button>
            <button>
              <i class="fas fa-thumbs-down"></i> {post.reaction.numDislike}
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
        {/* 1-2-1 One comment */}
        <article className="comment">
          <div className="comment-poster">
            <i class="fas fa-user-alt"></i> Leo
            <button>
              <i class="fas fa-envelope"></i> MAIL
            </button>
          </div>
          <div className="comment-text">
            <i class="far fa-comment"></i> Wow! great!
          </div>
        </article>

        <div className="comment-post">
          <input
            type="text"
            placeholder="What do you think about this"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button>
            <i class="fas fa-reply"></i>
          </button>
        </div>
      </section>
    </article>

    // <div className="card mt-4">
    //   <div className="card-body">
    //     <h4>{post.id}</h4>

    //     <p>{post.body}</p>
    //     <p>name : {post.user.name}</p>
    //     <p>email : {post.user.email}</p>

    //     <div className="form-group">
    //       <label>Comment: </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         placeholder="What do you think about this"
    //         value={body}
    //         onChange={(e) => setBody(e.target.value)}
    //       />
    //     </div>

    //     <div className="form-group">
    //       <button
    //         className="btn btn-info"
    //         onClick={() => console.log({ body })}
    //       >
    //         Share
    //       </button>
    //     </div>

    //     <div>
    //       <button
    //         className="btn btn-danger"
    //         onClick={() => onDeleteClick(post)}
    //       >
    //         Delete
    //       </button>

    //       <button className="btn btn-warning" onClick={handleUpdateClick}>
    //         Update
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
