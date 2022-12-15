import "./App.css";

function Register() {
  return (
    <section className="register">
      <form className="signupform">
        <h1 className="signup">Sign Up</h1>
        <label for="fname">Full name: </label>
        <input type="text" placeholder="Full name" className="input"></input>
        <label for="fname">Username: </label>
        <input type="text"
          // onChange={(e) => setUsernameState(userref.current.value)}
          // onChange={(e) => handleUsername()}
          placeholder="Username"
          className="field username input"
        />
        <label for="fname">Email:  </label>
        <input type="text" placeholder="Email" className="input"></input>
        <label for="fname">Password: </label>
        <input type="text" placeholder="Password" className="input"></input>
        <label for="fname">Re-enter Password: </label>
        <input type="text" placeholder="Password" className="input"></input>
        <button
          type="button"
          // onClick={handleSubmit}
          className="submit register button"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Register;