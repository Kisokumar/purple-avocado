import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";


import { Route, Routes } from "react-router-dom";
import RecentTransactionsPage from "./pages/RecentTransactionsPage";
import SavingsBreakdownPage from "./pages/SavingsBreakdownPage";
import IncomeCalculator from "./components/IncomeCalculator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogInPage className="routes"/>} />
      <Route path="/signup" element={<SignUpPage className="routes"/>} />
      <Route path="/login" element={<LogInPage className="routes"/>} />
      <Route path="/about" element={<AboutPage className="routes"/>} />
      <Route path="/recenttransactions" element={<RecentTransactionsPage className="routes"/>} />
      <Route path="/savings" element={<SavingsBreakdownPage className="routes"/>} />
      <Route path="/dashboard/:username" element={<DashboardPage className="routes"/>} />
      <Route path="*" element={<NotFoundPage className="routes"/>} />
      <Route path="/incomecalculator" element={<IncomeCalculatorPage className="routes"/>}/>
    </Routes>
  );
}

export default App;
