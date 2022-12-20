import { useState, setState } from "react";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = { username, password}
    fetch('', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(loginData)
    })
  };

  return (
    <section className="register">
      <form className="signupform">
        <h1 className="signup">Log In</h1>
        <div className="signup-container">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            className="field username input"
            onChange={(e) => handleInputChange(e)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => handleInputChange(e)}
          ></input>
          <button
            type="submit"
            id="password"
            value={password}
            onClick={handleSubmit}
            className="submit darkbutton"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
