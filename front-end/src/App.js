import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

import { Route, Routes } from "react-router-dom";
import BalanceHistoryPage from "./pages/BalanceHistoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dashboard/:userid" element={<DashboardPage />} />
      <Route path="/balance" element={<BalanceHistoryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
