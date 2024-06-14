import React from "react";
import "./message.css";

const Message = ({ message, isCurrentUser }) => {
  const messageClass = isCurrentUser ? "message-container right" : "message-container left";

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className={messageClass}>
      <div className="message-content">
        <p className="message-name">{message.name}</p>
        <p className="message-text">{message.text}</p>
        <p className="message-timestamp">{formatTimestamp(message.createdAt)}</p>
      </div>
    </div>
  );
};

export default Message;
