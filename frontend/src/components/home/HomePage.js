import React from "react";
import { Link } from "react-router-dom";

import "../../css/login.css";

function HomePage() {
  return (
    <div className="body_wrapper">
      {/* Display Posts */}
      <section className="posts">
        {/* 1 Post */}
        <article className="one-post">
          {/* 1-1 Post part */}
          <section className="post">
            <h4>
              <i className="fas fa-newspaper"></i> You got skills to share?
              Intreview to attend? Tech Talk is the place for you!
            </h4>

            <div className="post-text">
              With over than 50 thousands professionals joining and sharing
              their experiences and skills You will be always up to date with
              the new hobs and new emerging technologies to stay ready and calm
            </div>
          </section>
        </article>
      </section>

      <section className="quick-post">
        <br />
        <br />
        <Link to="/posts" className="btn btn-info">
          <i className="fas fa-share-alt"></i> GO POST PAGE
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
