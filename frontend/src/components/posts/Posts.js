import React from "react";
import Api from "../../api/Api";
import PostForm from "./PostsForm";
import PostCard from "./PostCard";
import { useState, useEffect } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState("");

    const createPost = (postData) => {
        Api.post("/articles", postData)
            .then((res) => setPosts([...posts, res.data]));
    };

    const getAll = () => {
        Api.get("/articles")
            .then(res => setPosts(res.data));
    };

    const updatePost = (updatedPost) => {
        Api.put("/articles/", updatedPost)
            .then(r => getAll());
    };

    const deletePost = (post) => {
        Api.delete("/articles/" + post.id)
            .then(r => getAll());
    }

    useEffect(() => {
        getAll();
    }, []);

    return <div>
        <PostForm onCreateClick={createPost} />

        {
            posts.map(post => (<PostCard
                key={post.id}
                post={post}
                onUpdateClick={updatePost}
                onDeleteClick={deletePost} />))
        }
    </div>
}


