import {  useState ,useCallback} from "react";
import { QRCodeSVG } from "qrcode.react";
import "../styles/qr.css";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext"

export default function CreateChat() {
  const [chatId, setChatId] = useState("");
  const qrValue = `https://localhost:3000//join?chatId=${chatId}`;
  const navigate = useNavigate();
  const {currentUser} = useAuth();

  const generateChatId = useCallback(() => {
    const StringLength = 20;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let Id = "";
    for (let i = 0; i < StringLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length + 1);
      Id += chars[randomIndex];
    }
      setChatId(Id);
  }, [setChatId]);

  if (!currentUser) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2 className=" text-3xl">Please log in to create a chat session.</h2>
      </div>
    );
  }

  return (
    <div className="qr-container">
      <div className="qr-card">
        <h2>Your QR Code</h2>

        <QRCodeSVG
          value={qrValue}
          size={220}
          level="H"
          includeMargin={true}
        />

        <p className="qr-text">
          Scan this QR code to continue
        </p>

        <input
          type="text"
          value={chatId}
          disabled
          placeholder="Enter QR value"
        />
        <div className="flex gap-2 m-2">
          <button onClick={generateChatId}>Generate New Chat ID</button>
        <button onClick={() => {
          navigate(`/join?chatId=${chatId}`);
        }}>
          Create Chat Session
        </button>
        </div>
        
      </div>
    </div>
  );
}
