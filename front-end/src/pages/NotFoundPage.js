import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="about-page-container">
        <h1>Oops!</h1>
        <p>The Page you were looking for does not exist!</p>
        <p>
          <a className="darkbutton link" href="/">
            {" "}
            Return to the homepage. . .
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}
