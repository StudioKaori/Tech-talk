import React, {useState} from 'react';

export default function PostForm({onSubmit}) {
    const [body, setBody] = useState("");
    

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Share your thoughts?</h4>
                <div>
                    <div className="form-group">
                        <label>Post: </label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="What is on your mind?"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>


                    <div className="form-group">
                        <button 
                            className="btn btn-info" 
                            onClick={() => onSubmit({body})}>
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
