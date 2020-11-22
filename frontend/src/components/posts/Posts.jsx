import { useState, useEffect } from "react";

import Api from "../../api/Api";
import PostForm from "./PostsForm";
import PostCard from "./PostCard";
import DMs from "../DM/DMs";

import { useRecoilState } from "recoil";
import {
  isShowDMFormState,
  dmReceiverState,
  userState,
} from "../../js/state-information";

export default function Posts() {
  const [status, setStatus] = useState(0);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useRecoilState(userState);
  const [dmReceiver, setDmReceiver] = useRecoilState(dmReceiverState);
  const [isShowDMForm, setIsShowDMForm] = useRecoilState(isShowDMFormState);

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

  useEffect(() => {
    showDMPopup();
  }, [isShowDMForm]);

  const showDMPopup = () => {
    const dmPopup = document.getElementById("dmPopup");
    if (isShowDMForm) {
      dmPopup.classList.remove("hidePopup");
      dmPopup.classList.add("showPopup");
    } else {
      dmPopup.classList.remove("showPopup");
      dmPopup.classList.add("hidePopup");
    }
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
              user={user}
            />
          ))
        : null}

      <div id="dmPopup" className="hidePopup dmPopup">
        <div className="popup_inner">{isShowDMForm ? <DMs /> : null}</div>
      </div>
    </div>
  );
}
