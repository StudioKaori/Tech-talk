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
    <div className="card mt-4">
      <div className="card-body">
        <h4>{post.id}</h4>

        <p>{post.body}</p>
        <p>name : {post.user.name}</p>
        <p>email : {post.user.email}</p>

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
            onClick={() => onDeleteClick(post)}
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
