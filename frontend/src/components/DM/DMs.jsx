import { useState, useEffect } from "react";
import Api from "../../api/Api";
import CommentsForm from "./CommentsForm";
import CommentCard from "./CommentCard";

import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

export default function Comments({ post }) {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useRecoilState(userState);

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
    console.log(updatedComment);
    updatedComment.article = post;
    Api.put("/comments/", updatedComment).then((r) => getAll());
  };

  const deleteComment = (comment) => {
    Api.delete("/comments/" + comment.id).then((r) => getAll());
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <section className="comments">
      <h6>
        <i className="fas fa-comments"></i> Comments
      </h6>

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
    </section>
  );
}
