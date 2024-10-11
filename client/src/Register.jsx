import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    await axios.post("/register", { username, password });
  }
  return (
    <div className="bg-[#3c9dd0] h-screen flex items-center">
      <form className="w-64 mx-auto">
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm mb-2 p-2 border "
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm mb-2 p-2 border"
        />
        <button className="bg-[#1c3464] text-white w-full rounded-sm p-2">
          Register
        </button>
      </form>
    </div>
  );
}
