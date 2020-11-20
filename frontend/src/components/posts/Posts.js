import React from "react";
import Api from "../../api/Api";
import PostForm from "./PostsForm";
import PostCard from "./PostCard";
import DMForm from "../DM/DMForm";
import { useState, useEffect } from "react";

export default function Posts() {
  const [status, setStatus] = useState(0);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");
  let receiver = "";

  const createPost = (postData) => {
    setStatus(0);
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

  const sendDM = (postData) => {
    console.log(postData);
    // Todo add reciever as well
    // find a solution
    postData.sender = user;
    postData.receiver = receiver;
    Api.post("/directMessages", postData).then((res) => {
      //setPosts([res.data, ...posts]);
      console.log(res.data);
    });
  };

  useEffect(() => {
    setUser(getUser());
    getAll();
  }, []);

  useEffect(() => {
    console.log(posts);
    if (posts.length !== 0) {
      setStatus(1);
    }
  }, [posts]);

  // for dm

  const showDMPopup = (receiver) => {
    console.log("receiver", receiver);
    const dmPopup = document.getElementById("dmPopup");
    this.receiver = receiver;

    dmPopup.classList.remove("hidePopup");
    dmPopup.classList.add("showPopup");
    //dmPopup.style.width = "100%";
  };

  const hideDMPopup = () => {
    const dmPopup = document.getElementById("dmPopup");

    dmPopup.classList.remove("showPopup");
    dmPopup.classList.add("hidePopup");
    //dmPopup.style.width = "100%";
  };

  return (
    <div className="body_wrapper">
      <PostForm onCreateClick={createPost} />

      {status === 1
        ? posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onUpdateClick={updatePost}
              onDeleteClick={deletePost}
              onShowDMPopup={showDMPopup}
              user={user}
            />
          ))
        : null}

      <div id="dmPopup" className="hidePopup dmPopup">
        <div>
          <button onClick={hideDMPopup}>close</button>
        </div>
        <div className="popup_inner">
          <DMForm onSendDMClick={sendDM} />
        </div>
      </div>
    </div>
  );
}
