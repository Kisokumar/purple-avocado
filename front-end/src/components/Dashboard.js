import { useParams } from "react-router-dom";

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
  balanceHistory: [
    ["1/12/2022", "$315,360,102,090,135,047"],
    ["1/8/2022", "$315,360,002,090,035,021"],
    ["1/8/2022", "$315,260,002,040,035,013"],
    ["1/4/2022", "$313,220,008,098,062,061"],
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
      <div className="dashboard">
        <h1>Welcome back {userData(username).name}!</h1>
        <p>Balance: {userData(username).balance}</p>
        <p>
          Recent Transactions: {userData(username).recentTransactions.Bills}
        </p>
      </div>
    </>
  );
}

export default Dashboard;
