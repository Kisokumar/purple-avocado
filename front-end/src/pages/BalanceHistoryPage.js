import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Footer from "../components/Footer";
import BalanceHistory from "../components/BalanceHistory";

export default function BalanceHistoryPage() {
  return (
    <>
      <HeaderLoggedIn />
      <BalanceHistory/>
      <Footer />
    </>
  );
}
