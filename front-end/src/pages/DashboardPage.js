import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";

export default function DashboardPage() {
  return (
    <>
      <HeaderLoggedIn />
      <Dashboard />
      <Footer />
    </>
  );
}
