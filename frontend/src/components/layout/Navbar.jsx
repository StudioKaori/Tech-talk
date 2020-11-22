import React, { useEffect, useState } from "react";
import Api from "../../api/Api";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import {
  isShowDMFormState,
  dmReceiverState,
  userState,
} from "../../js/state-information";

import DMNotification from "../DM/DMNotification";

function Navbar({ onLogout }) {
  const [isShowDMNotification, setIsShowDMNotification] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [dmNotifications, setDmNotifications] = useState([]);
  const [dmReceiver, setDmReceiver] = useRecoilState(dmReceiverState);
  const [isShowDMForm, setIsShowDMForm] = useRecoilState(isShowDMFormState);

  // for user info
  const getUser = () => {
    Api.get("/user/loggedInUser").then((res) => setUser(res.data));
  };

  useEffect(() => {
    setUser(getUser());
    resizeNav();
  }, []);

  // for navigation drawer
  window.addEventListener(
    "resize",
    function () {
      resizeNav();
    },
    false
  );

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

  // for DM notification

  useEffect(() => {
    const interval = 2000;
    const dmNavbarTimer = setInterval(() => {
      findAllUnfetchedDm();
    }, interval);

    return () => {
      clearInterval(dmNavbarTimer);
    };
  }, [user]);

  const findAllUnfetchedDm = () => {
    const url = "/directMessages/findAllUnfetchedDm?userId=" + user.id;
    Api.get(url).then((res) => {
      if (res.data.length !== 0) {
        markDMFetched();
        setDmNotifications(res.data);
        setIsShowDMNotification(true);
      }
    });
    //.catch((e) => console.log("no new message"));
  };

  const markDMFetched = () => {
    const url = "/directMessages/markAllDMFetched?senderId=" + user.id;
    Api.put(url).then((res) => console.log("fetched dm marked as fetched."));
  };

  const closeDMNotification = () => {
    document.getElementById("dm-popup-notification").style.width = "0";
    setIsShowDMNotification(false);
  };

  useEffect(() => {
    if (isShowDMNotification) {
      document.getElementById("dm-popup-notification").style.width = "250px";
      setTimeout(closeDMNotification, 5000);
    }
  }, [isShowDMNotification]);

  // link from notification
  const showDmFromNotification = (receiver) => {
    setDmReceiver(receiver);
    setIsShowDMForm(true);
  };

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
              <i className="fas fa-bars"></i>
            </span>
          </div>

          <div id="mySidenav" className="header-menu">
            <div className="pc-icon">
              <i className="fas fa-bars"></i>
            </div>
            <span className="closebtn" onClick={() => closeNav()}>
              &times;
            </span>
            <ul>
              <li onClick={() => closeNav()}>
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>

              <li onClick={() => closeNav()}>
                <Link to="/posts" className="nav-link">
                  POSTS
                </Link>
              </li>

              {/* <li onClick={() => closeNav()}>
                <Link to="/chat" className="nav-link">
                  CHAT
                </Link>
              </li> */}
            </ul>
            <button className="logout-button" onClick={onLogout}>
              LOGOUT
            </button>
          </div>
        </div>
      </div>

      {/* dm notification */}

      <div id="dm-popup-notification">
        {isShowDMNotification
          ? dmNotifications.map((notification) => (
              <DMNotification
                key={notification.id}
                notification={notification}
                onNotificationClick={showDmFromNotification}
              />
            ))
          : null}
      </div>
    </nav>
  );
}

export default Navbar;
