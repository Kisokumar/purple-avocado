export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <a className="link" href="/">
          <div className="title-box">
            <img alt="Logo" src="/logo.png" className="logo" />
            <p>Purple Avocado</p>
          </div>
        </a>
        <ul className="nav-items">
          <li>
            <a className="button" href="/login">
              Login
            </a>
          </li>
          <li>
            <a className="button" href="/signup">
              Signup
            </a>
          </li>
          <li>
            <a className="button" href="/about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
