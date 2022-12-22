import { useState, setState} from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      email: email,
      password: password,
      passwordrpt: confirmPassword
    }

    axios.post(`https://...`, userData)
      .then(
        navigate(`/dashboard/:${name}`)
      )

    console.log(userData)
  }


  return (
    <section className="register">
      <form className="signupform">
        <h1 className="signup">Sign Up</h1>
        <div className="signup-container">
          <input
            type="text"
            value={name}
            placeholder="Full Name"
            className="input"
            id="name"
            onChange={(e) => handleInputChange(e)}
          ></input>
          <input
            type="email"
            value={email}
            id="email"
            placeholder="Email"
            className="input"
            onChange={(e) => handleInputChange(e)}
          ></input>
          <input
            type="password"
            value={password}
            id="password"
            placeholder="Password"
            className="input"
            onChange={(e) => handleInputChange(e)}
          ></input>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Re-enter password"
            className="input"
            id="confirmPassword"
            onChange={(e) => handleInputChange(e)}
          ></input>
          <button
            type="submit"
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

export default Register;
