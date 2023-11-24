import { useState } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/v1/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await response.json();
    setToken(data.token);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
      <input name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <button value="SUBMIT" type="submit" />
    </form>
  );
}

export default App;
