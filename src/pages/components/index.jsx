import React, { useEffect, useState, useRef } from "react";
import Message from "./message";
import SendMessage from "./send-message";
import { db, auth } from "../../firebase";
import { ref, onValue, query, orderByChild, limitToLast } from "firebase/database";
import { Link } from "react-router-dom";
import "./message.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const messagesQuery = query(
      ref(db, "messages"),
      orderByChild("createdAt"),
      limitToLast(20)
    );

    const unsubscribe = onValue(messagesQuery, (snapshot) => {
      const fetchedMessages = [];
      snapshot.forEach((childSnapshot) => {
        fetchedMessages.push({ ...childSnapshot.val(), id: childSnapshot.key });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });

    scrollToBottom();

    return () => unsubscribe();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chatroom-container">
      <div className="messages">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isCurrentUser={message.uid === auth.currentUser.uid}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <SendMessage />
      </div>
      <Link to="/login">
        <button className="sign-out">Sign Out</button>
      </Link>
    </div>
  );
};

export default Chat;
