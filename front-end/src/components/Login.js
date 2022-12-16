function Login() {
  return (
    <section className="register">
      <form className="signupform">
        <h1 className="signup">Log In</h1>
        <div className="signup-container">
          <input
            type="text"
            // onChange={(e) => setUsernameState(userref.current.value)}
            // onChange={(e) => handleUsername()}
            placeholder="Username"
            className="field username input"
          />
          <input type="text" placeholder="Password" className="input"></input>
          <button
            type="button"
            // onClick={handleSubmit}
            className="submit button"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
