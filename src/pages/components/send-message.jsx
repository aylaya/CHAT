import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { push, ref, serverTimestamp } from "firebase/database";
import "./message.css";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await push(ref(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <form className="send-message-container" onSubmit={(e) => e.preventDefault()}>
      <textarea
        placeholder="Type your message"
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className="message-input"
      />
      <button className="send-button" onClick={sendMessage}>Send</button>
    </form>
  );
};

export default SendMessage;
