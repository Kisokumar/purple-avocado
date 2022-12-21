import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";


import { Route, Routes } from "react-router-dom";
import RecentTransactionsPage from "./pages/RecentTransactionsPage";
import SavingsBreakdownPage from "./pages/SavingsBreakdownPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/recenttransactions" element={<RecentTransactionsPage />} />
      <Route path="/savings" element={<SavingsBreakdownPage />} />
      <Route path="/dashboard/:username" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
