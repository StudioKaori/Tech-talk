import React, { useState } from "react";
import PostUpdateForm from "./PostUpdateForm";

export default function PostCard({ post, onDeleteClick, onUpdateClick }) {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdateClick = () => {
        setIsUpdating(true);
    };

    return isUpdating ?
        <PostUpdateForm oldPost={post} onUpdateClick={(updatedPost) => { setIsUpdating(false); onUpdateClick(updatedPost); }} />
        :
        <div className="card mt-4">
            <div className="card-body">
                <h1>{post.id}</h1>
                <p>{post.body}</p>

                <div>
                    <button className="btn btn-danger" onClick={() => onDeleteClick(post)}>
                        Delete
                </button>

                    <button className="btn btn-warning" onClick={handleUpdateClick}>
                        Update
                    </button>
                </div>
            </div>
        </div>
}