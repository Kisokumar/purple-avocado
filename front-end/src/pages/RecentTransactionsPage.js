import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Footer from "../components/Footer";
import RecentTransactions from "../components/RecentTransactions";

export default function RecentTransactionsPage() {
  return (
    <>
      <HeaderLoggedIn />
      <RecentTransactions className="recent-transactions-component" />
      <Footer />
    </>
  );
}
