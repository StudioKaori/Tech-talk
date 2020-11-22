import React from "react";
import { Link } from "react-router-dom";

export default function DMNotification({ notification, onNotificationClick }) {
  return (
    <div onClick={() => onNotificationClick}>
      <h6>New DM</h6>
      <div>
        <i className="fas fa-user-alt"></i>
        {notification.sender.name}
      </div>
      <div>{notification.message.substring(0, 30)}</div>
    </div>
  );
}
