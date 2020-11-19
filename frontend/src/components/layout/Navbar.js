import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ onLogout }) {
  // for navigation drawer
  window.addEventListener(
    "resize",
    function () {
      resizeNav();
    },
    false
  );

  useEffect(() => {
    resizeNav();
  }, []);

  function resizeNav() {
    const mySidenav = document.getElementById("mySidenav");

    if (window.innerWidth >= 750) {
      mySidenav.classList.add("header-menu-PC");
      mySidenav.style.width = "100%";
    } else if (window.innerWidth < 750) {
      mySidenav.classList.remove("header-menu-PC");
      closeNav();
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    if (window.innerWidth < 750) {
      document.getElementById("mySidenav").style.width = "0";
    }
  }

  return (
    <nav>
      <div className="header-menu-bg">
        <div className="header-menu-wrapper">
          <div className="header-menu-log">
            <h1>
              TECH-TALK<i className="fas fa-share-alt"></i>
            </h1>
          </div>

          <div className="mobile-menu">
            <span onClick={() => openNav()}>
              <i class="fas fa-bars"></i>
            </span>
          </div>

          <div id="mySidenav" className="header-menu">
            <div className="pc-icon">
              <i class="fas fa-bars"></i>
            </div>
            <span className="closebtn" onClick={() => closeNav()}>
              &times;
            </span>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>

              <li>
                <Link to="/posts" className="nav-link">
                  POSTS
                </Link>
              </li>


              

              <li>
                <Link to="/chat" className="nav-link">
                  CHAT
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-outline-info my-2 my-sm-0"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>

    /*
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        SDA starter
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/chat" className="nav-link">
              Chat
            </Link>
          </li>
        </ul>

        <button
          className="btn btn-outline-info my-2 my-sm-0"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
    */
  );
}

export default Navbar;
