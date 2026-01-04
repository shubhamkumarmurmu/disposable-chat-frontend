import Chat from "../components/Chat";
import { useSearchParams } from "react-router-dom";

function Chatpage() {
  const [searchParams] = useSearchParams();
  const chatId = searchParams.get("chatId");
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
      }}
    >
      chatId: {chatId}
      <Chat />
    </div>
  );
}

export default Chatpage;
