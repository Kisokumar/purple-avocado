export default function HeaderLoggedIn() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="title-box">
          <img alt="Logo" src="/logo.png" className="logo" />
          <p>Purple Avocado</p>
        </div>
        <ul className="nav-items">
          <li>
            <a
            className = "button"
              href="/dashboard/:username"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              className = "button"
              href="/recenttransactions"
            >
              Recent Transactions
            </a>
          </li>
          <li>
            <a
              className = "button"
              href="/savings"
            >
              Savings Breakdown
            </a>
          </li>
          <li>
            <a
              className = "button"
              href="/login"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
