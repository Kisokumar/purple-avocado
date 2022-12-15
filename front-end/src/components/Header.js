export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="title-box">
          <img alt="money bag logo" src="./money-bag.png" className="logo" />
          <p>Purple Avacodo</p>
        </div>
        <ul className="nav-items">
          <li>
            {/* Need to change link */}
            <a
              className="button"
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </li>
          <li>
            {/* Need to change link */}
            <a
              className="button"
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Signup
            </a>
          </li>
          <li>
            {/* Need to change link */}
            <a
              className="button"
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
