import React, { useState } from "react";

export default function CommentsForm({ onCreateClick }) {
  const [body, setBody] = useState("");

  return (
    <div className="comment-post">
      <input
        type="text"
        placeholder="What do you think about this?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={() => onCreateClick({ body })}>
        <i class="fas fa-reply"></i>
      </button>
    </div>

    // <div className="one-post card mt-3">
    //   <div className="quick-post">
    //     <h5 className="comment-post card-title"><i class="far fa-comment"></i> What do you think about this?</h5>
    //     <div>
    //       <div className="">
    //         <input
    //           type="text"
    //           size="10"
    //           className="form-control"
    //           placeholder= "Wow ! great !"
    //           value={body}
    //           onChange={(e) => setBody(e.target.value)}
    //         />
    //       </div>

    //       <div className="form-group">
    //         <button
    //           className="btn btn-info"
    //           onClick={() => onCreateClick({ body })}
    //         >
    //           Share
    //         </button>
    //       </div>
    //       </div>
    //       </div>
    //       </div>
  );
}
