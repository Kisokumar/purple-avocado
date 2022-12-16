export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="title-box">
          <img alt="money bag logo" src="./money-bag.png" className="logo" />
          <p>Purple Avocado</p>
        </div>
        <ul className="nav-items">
          <li>
            {/* Need to change link */}
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recent Transactions
            </a>
          </li>
          <li>
            {/* Need to change link */}
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Overview
            </a>
          </li>
          <li>
            {/* Need to change link */}
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
