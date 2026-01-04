import { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
const {useAuth}=require("../context/AuthContext");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser}=useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    setUser(userData);
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>

        <p className="footer-text">
          Don’t have an account? <span><Link to="/signup">Sign Up</Link></span>
        </p>
      </form>
    </div>
  );
}
