import { useEffect, useState } from "react";
import "../styles/chat.css";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

export default function Chat() {
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    socket.emit("sentMessages", message);
    setMessage("");
  };

  useEffect(() => {
    const handler = (payload) => {
      setReceivedMessages((prev) => [...prev, payload]);
    };

    socket.on("receivedMessage", handler);

    return () => {
      socket.off("receivedMessage", handler);
    };
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">Chat Room</div>

      <div className="chat-messages">
        {receivedMessages.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
