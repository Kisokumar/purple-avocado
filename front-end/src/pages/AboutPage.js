import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SignUpPage() {
  return (
    <>
      <Header />
      <div className="about-page-container">
        <h1> About </h1>
        <p>
          Purple avocado aims to help you track your budget and visualise your
          spending!
        </p>
        <a  href="login" className="button">
          Log In</a>
        <a  href="signup" className="button">
          Sign Up</a>
      </div>
      <Footer />
    </>
  );
}
