import React from "react";

import "../../css/login.css";

function HomePage() {
  return (
    <div className="body_wrapper">
      {/* quick Post */}
      <section className="quick-post">
        <input placeholder="What's on your mind?"></input>
        <button>SUBMIT</button>
      </section>

      {/* Display Posts */}
      <section className="posts">
        {/* 1 Post */}
        <article className="one-post">
          {/* 1-1 Post part */}
          <section className="post">
            <h4>
              <i class="fas fa-newspaper"></i> Technical Interviewing 101
            </h4>
            <div className="poster">
              <i class="fas fa-user-alt"></i> Kaori Persson
            </div>
            <div className="post-text">
              The technical interview is unlike any other job interview: it’s a
              specialized, rigorous process that tests your coding skills,
              problem-solving abilities, and personality. But even though
              interviewing for a tech job is intimidating (with whiteboard
              challenges, remote coding challenges, and even full days of onsite
              interviews sometimes), it’s a lot easier when you know what to
              expect and are well-prepared.
            </div>
            <div className="post-menu">
              <div className="reaction">
                <button>
                  <i class="fas fa-thumbs-up"></i> LIKE
                </button>
                <button>
                  <i class="fas fa-thumbs-down"></i> DISLIKE
                </button>
              </div>

              <div className="post-option">
                <button>
                  <i class="fas fa-envelope"></i> MAIL
                </button>
              </div>
            </div>
          </section>

          {/* 1-2 Comments to the post part */}
          <section className="comments">
            <h6>
              <i class="fas fa-comments"></i> Comments
            </h6>
            {/* 1-2-1 One comment */}
            <article className="comment">
              <div className="comment-poster">
                <i class="fas fa-user-alt"></i> Leo
                <button>
                  <i class="fas fa-envelope"></i> MAIL
                </button>
              </div>
              <div className="comment-text">
                <i class="far fa-comment"></i> Wow! great!
              </div>
            </article>

            <div className="comment-post">
              <input placeholder="Comment to the post..."></input>
              <button>
                <i class="fas fa-reply"></i>
              </button>
            </div>
          </section>
        </article>
      </section>
    </div>

    // original
    // <div className="card">
    //     <div className="card-body">
    //         <h4 className="card-title">SDA starter template</h4>
    //         <p>This starter template is based on Spring, PostgreSQL, React, React router and Axios. Check the following links for documentation and guides:</p>
    //         <ul>
    //             <li><a href="https://spring.io/projects/spring-boot">Spring</a></li>
    //             <li><a href="https://www.postgresql.org">PostgreSQL</a></li>
    //             <li><a href="https://reactjs.org">React</a></li>
    //             <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a></li>
    //             <li><a href="https://github.com/axios/axios">Axios</a></li>
    //         </ul>
    //     </div>
    // </div>
  );
}

export default HomePage;
