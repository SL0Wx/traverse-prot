import { useState } from "react";

const SignUp = () => {
  const [token, setToken] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, password: password, passwordConfirm: passwordConf }),
    });
    const data = await response.json();
    setToken(data.token);
    console.log(data);
    if (data.status === "fail" || data.status === "error") {
      setErrorMsg(data.message);
    } else {
      setErrorMsg("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input name="name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label htmlFor="passwordConf">Password Confirm</label>
        <br />
        <input
          name="passwordConf"
          value={passwordConf}
          type="password"
          onChange={(e) => setPasswordConf(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
        <br />
        {errorMsg}
      </form>
    </div>
  );
};

export default SignUp;
