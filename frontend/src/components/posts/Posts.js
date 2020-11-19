import React from "react";
import Api from "../../api/Api";
import PostForm from "./PostsForm";
import PostCard from "./PostCard";
import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");

  const createPost = (postData) => {
    postData.user = user;
    Api.post("/articles", postData).then((res) => {
      setPosts([res.data, ...posts]);
    });
  };

  const getAll = () => {
    Api.get("/articles").then((res) => setPosts(res.data));
  };

  const updatePost = (updatedPost) => {
    Api.put("/articles/", updatedPost).then((r) => getAll());
  };

  const deletePost = (post) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      Api.delete("/articles/" + post.id).then((r) => getAll());
    }
  };

  // for user info
  const getUser = () => {
    Api.get("/user/loggedInUser").then((res) => setUser(res.data));
  };

  useEffect(() => {
    setUser(getUser());
    getAll();
  }, []);

  return (
    <div>
      <PostForm onCreateClick={createPost} />

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onUpdateClick={updatePost}
          onDeleteClick={deletePost}
          user={user}
        />
      ))}
    </div>
  );
}
