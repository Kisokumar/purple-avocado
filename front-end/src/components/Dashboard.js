import { useParams } from "react-router-dom";
// import SavingsBreakdown from "./SavingsBreakdown";
import BalanceHistory from "./BalanceHistory";

// This would be received from the backend once completed

const mockData = {
  userid: "Scrooge",
  name: "Scrooge McDuck",
  balance: "$315,360,102,090,135,047",
  recentTransactions: {
    Groceries: -139,
    "Investing/Saving": -1200,
    Income: 30000,
    Bills: -200,
  },
  // balanceHistory: [
  //   ["1/12/2022", "$315,360,102,090,135,047"],
  //   ["1/8/2022", "$315,360,002,090,035,021"],
  //   ["1/8/2022", "$315,260,002,040,035,013"],
  //   ["1/4/2022", "$313,220,008,098,062,061"],
  // ],
  balanceHistory: [
    {
      month: "Jan",
      Balance: 4000,
    },
    {
      month: "Feb",
      Balance: 3000,
    },
    {
      month: "Mar",
      Balance: 2000,
    },
    {
      month: "Apr",
      Balance: 2780,
    },
    {
      month: "May",
      Balance: 1890,
    },
    {
      month: "Jun",
      Balance: 2390,
    },
    {
      month: "Jul",
      Balance: 3490,
    },
    {
      month: "Aug",
      Balance: 3490,
    },
    {
      month: "Sep",
      Balance: 3490,
    },
    {
      month: "Oct",
      Balance: 3490,
    },
    {
      month: "Nov",
      Balance: 3490,
    },
    {
      month: "Dec",
      Balance: 3490,
    },
  ],
};

function Dashboard() {
  const userData = (username) => {
    // async function that returns userdata similar to the data above
    return mockData;
  };
  const { username } = useParams();

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard">
          <h1>Welcome back {userData(username).name}!</h1>
          <p>Balance: {userData(username).balance}</p>
          <p>
            Recent Transactions: {userData(username).recentTransactions.Bills}
          </p>
          {/* <SavingsBreakdown /> */}
          <BalanceHistory data={mockData.balanceHistory} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
