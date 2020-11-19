import React, { useState } from "react";

export default function PostUpdateForm({ oldPost, onUpdateClick }) {
  const [body, setBody] = useState(oldPost.body);

  return (
    <section className="quick-post">
      <h4>What else do you wanna add?</h4>
      <div>
        <textarea
          class="form-control"
          placeholder="Name"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button
          className="btn btn-info"
          onClick={() => onUpdateClick({ ...oldPost, body })}
        >
          <i className="fas fa-share-alt"></i> UPDATE
        </button>
      </div>
    </section>

    // <div className="card">
    //   <div className="card-body">
    //     <h4 className="card-title">What else do you wanna add?</h4>
    //     <div>
    //       <div className="form-group">
    //         <label>Updated Post: </label>
    //         <input
    //           type="text"
    //           class="form-control"
    //           placeholder="Name"
    //           value={body}
    //           onChange={(e) => setBody(e.target.value)}
    //         />
    //       </div>

    //       <div className="form-group">
    //         <button
    //           className="btn btn-warning"
    //           onClick={() => onUpdateClick({ ...oldPost, body })}
    //         >
    //           Update
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
