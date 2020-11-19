import React from "react";
import Api from "../../api/Api";
import CommentsForm from "./CommentsForm";
import CommentCard from "./CommentCard";

import { useState, useEffect } from "react";

export default function Comments({ post }) {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState("");
  console.log(comments);

  const createComment = (commentData) => {
    commentData.article = post;
    commentData.user = user;
    Api.post("/comments", commentData).then((res) => {
      setComments([res.data, ...comments]);
    });
  };

  const getAll = () => {
    Api.get("/comments?articleId=" + post.id).then((res) =>
      setComments(res.data)
    );
  };

  const updateComment = (updatedComment) => {
    Api.put("/comments/", updatedComment).then((r) => getAll());
  };

  const deleteComment = (comment) => {
    Api.delete("/comments/" + comment.id).then((r) => getAll());
  };

  // for user info
  const getUser = () => {
    Api.get("/user/loggedInUser").then((res) => setUser(res.data));
  };

  useEffect(() => {
    getUser();
    getAll();
  }, []);

  return (
    <div>
      <CommentsForm onCreateClick={createComment} />

      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          onUpdateClick={updateComment}
          onDeleteClick={deleteComment}
          user={user}
        />
      ))}
    </div>
  );
}
