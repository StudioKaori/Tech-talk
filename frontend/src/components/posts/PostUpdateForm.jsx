import React, { useState } from "react";


export default function PostUpdateForm({ oldPost, onUpdateClick }) {
    const [body, setBody] = useState(oldPost.body);
    

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >What else do you wanna add?</h4>
                <div>
                    <div className="form-group">
                        <label>Updated Post: </label>
                        <input type="text" class="form-control" placeholder="Name" value={body} onChange={e => setBody(e.target.value)} />

                    </div>


                    <div className="form-group">
                    <button className="btn btn-warning" onClick={() => onUpdateClick({ ...oldPost, body})}>
                    Update
                </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
