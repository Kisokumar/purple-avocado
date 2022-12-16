import {useState, setState} from 'react'

function Register() {
  const [name, setName] = useState(null)
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
    if(id === "username"){
      setUsername(value);
  }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }

}
const handleSubmit  = (event) => {
  event.preventDefault();
  console.log(name,username,email,password,confirmPassword);
}
  
  return (
    <section className="register">
      <form className="signupform">
        <h1 className="signup">Sign Up</h1>
        <div className="signup-container">
          <input 
          type="text"
          value={name}
          placeholder='Full Name' 
          className="input"
          id='name'
          onChange = {(e) => handleInputChange(e)}>
          </input>
          <input
            type="text"
            value={username}
            id='username'
            placeholder="Username"
            className="field username input"
            onChange = {(e) => handleInputChange(e)}
          />
          <input type="text" value={email} id='email' placeholder="Email" className="input" onChange = {(e) => handleInputChange(e)}></input>
          <input type="text" value={password} id='password' placeholder="Password" className="input" onChange = {(e) => handleInputChange(e)}></input>
          <input
            type="text"
            value={confirmPassword}
            placeholder="Re-enter password"
            className="input"
            id='confirmPassword'
            onChange = {(e) => handleInputChange(e)}
          ></input>
          <button
            type="submit"
            onClick={handleSubmit}
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
