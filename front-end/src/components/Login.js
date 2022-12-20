import { useState, setState } from "react";
import {useNavigate} from 'react-router-dom'

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

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // event.preventDefault();
    const loginData = { username, password}
    fetch('', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(loginData)
    })
    navigate("/dashboard/" + username);
  };

  return (
    <section className="register">
      <h1 className="signup">Log In</h1>
      <form className="signupform signup-container">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            className="field username input"
            onChange={(e) => handleInputChange(e)}
            required
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => handleInputChange(e)}
            required
          ></input>
          <button
            type="submit"
            id="password"
            value={password}
            onClick={handleSubmit}
            className="submit darkbutton"
            action="/dashboard"
          >
            Submit
          </button>
      </form>
    </section>
  );
}

export default Login;
