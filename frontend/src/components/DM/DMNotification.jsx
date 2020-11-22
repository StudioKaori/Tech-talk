import React from "react";

export default function DMNotification({ notification, onNotificationClick }) {
  return (
    <div
      onClick={() => onNotificationClick(notification.sender)}
      className="dm-popup-notification-inner"
    >
      <h6>New DM</h6>
      <div>
        <i className="fas fa-user-alt"></i>
        {notification.sender.name}
      </div>
      <div>{notification.message.substring(0, 50)}</div>
    </div>
  );
}
