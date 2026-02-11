import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/login", { email, password });
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 card">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-green-600 text-white w-full p-2 rounded">Login</button>
      </form>
    </div>
  );
}
