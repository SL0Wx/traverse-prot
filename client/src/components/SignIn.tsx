import { useState } from "react";

const SignIn = () => {
  const [token, setToken] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
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
    if (data.status === "fail") {
      setErrorMsg(data.message);
    } else {
      setErrorMsg("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <br />
      <input name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
      <br />
      {errorMsg}
    </form>
  );
};

export default SignIn;
