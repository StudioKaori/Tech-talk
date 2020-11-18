import React, { useEffect } from "react";

export default function Header() {
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
              <i className="fas fa-globe"></i>
            </span>
          </div>

          <div id="mySidenav" className="header-menu">
            <div className="pc-icon">
              <i className="fas fa-globe"></i>
            </div>
            <span className="closebtn" onClick={() => closeNav()}>
              &times;
            </span>
            <ul>
              <li
                onClick={() => {
                  closeNav();
                }}
                id="en"
                className="lang-switch checked"
              >
                EN
              </li>
              <li
                onClick={() => {
                  closeNav();
                }}
                id="sv"
                className="lang-switch"
              >
                SV
              </li>
              <li
                onClick={() => {
                  closeNav();
                }}
                id="ja"
                className="lang-switch"
              >
                JA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
