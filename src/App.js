import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Chatpage from "./pages/ChatPage";
import CreateChat from "./pages/CreateChat";
import {AuthProvider} from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/join" element={<Chatpage />} />
          <Route path="/create-room" element={<CreateChat />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
