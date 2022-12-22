import { useState, setState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "username"){
      setUsername(value);
  }
    if(id === "password"){
        setPassword(value);
    }}

  const navigate = useNavigate(); //allows a React component to programmatically navigate to a new location

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password
    }

      axios.post('http://...', userData)
    .then(response => {
      // handle the response here
    })
    .catch(error => {
      // handle the error here
    })

    console.log(userData)
  }


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
            id = "password"
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
