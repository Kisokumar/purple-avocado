function Login() {
  return (
    <section className="register">
      <form className="signupform">
        <h1 className="signup">Log In</h1>
        <div className="signup-container">
          <input
            type="email"
            // onChange={(e) => setUsernameState(userref.current.value)}
            // onChange={(e) => handleUsername()}
            placeholder="Email"
            className="field username input"
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
          ></input>
          <button
            type="button"
            // onClick={handleSubmit}
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
