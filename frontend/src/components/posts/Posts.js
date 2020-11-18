import React from "react";
import postApi from "../../api/PostsApi";
import PostForm from "./PostsForm";


console.log(postApi.getAllPosts());
export default function PostsPage() {
    const createPost = (postData) => {
        console.log(postData);
    }

    return (
        <div>
        <PostForm onSubmit={createPost}/>
        </div>
    );
}
