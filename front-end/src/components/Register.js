import { useState, setState } from "react";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
  const handleSubmit = (event) => {
    event.preventDefault();
    const signUpData = { name, email, password, confirmPassword}
    fetch('', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(signUpData)
    })
    // console.log(name, email, password, confirmPassword);
    // console.log(signUpData)

    
  };

  return (
    <section className="register">
      <form className="signupform" onSubmit={handleSubmit}>
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
            className="submit button"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Register;
