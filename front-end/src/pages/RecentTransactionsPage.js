import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Footer from "../components/Footer";
import RecentTransactions from "../components/RecentTransactions";

export default function RecentTransactionsPage() {
  return (
    <>
      <HeaderLoggedIn />
      <div className="recent-transactions-container">
        <RecentTransactions/>
      </div>
      <Footer />
    </>
  );
}
