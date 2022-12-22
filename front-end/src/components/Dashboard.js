import { useParams } from "react-router-dom";
import RecentTransactions from "./RecentTransactions";
import { useState } from "react";
import axios from 'axios';

// This would be received from the backend once completed

const mockData = {
  userid: "Scrooge",
  name: "Scrooge McDuck",
  balance: "$5500",
  recentTransactions: {
    Groceries: -139,
    Shopping: -1200,
    Entertainment: 30000,
    Travel: -200,
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
      Balance: 2490,
    },
    {
      month: "Oct",
      Balance: 3490,
    },
    {
      month: "Nov",
      Balance: 5500,
    },
    {
      month: "Dec",
      Balance: 5500,
    },
  ],
};

function Dashboard() {
  const userData = (username) => {
    // async function that returns userdata similar to the data above
    return mockData;
  };
  const { username } = useParams();

  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionData = { transactionType, amount, date}
    console.log(transactionData)
    axios.post('http://...', userData)
    .then(response => {
      // handle the response here
    })
    .catch(error => {
      // handle the error here
    })
  };

  var curr = new Date();
  curr.setDate(curr.getDate());
  var todaysDate = curr.toISOString().substring(0,10);

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-welcome">
          <h1>Welcome back, {userData(username).name}!</h1>
          <p>Balance: {userData(username).balance}</p>
          {/* fix code below by looping over recentTransactions and returning each one in a p tag */}
          {/* <p>
            Recent Transactions: {userData(username).recentTransactions.Bills}
          </p> */}
          {/* <SavingsBreakdown /> */}
        </div>

        <section className="recent-and-addd-transactions">
        <div className="add-transaction">
          <h1>Add Transaction</h1>
          <div>
          <form
              onSubmit={handleSubmit}
              id="transaction-form"
              className="addtransaction"
              // action="/dashboard"
            >
              <select
                className="input dark dropdown"
                onChange={(e) => setTransactionType(e.target.value)}
                required
                // defaultValue={"Choose Transaction"} //
              >
                <option value="" disabled selected>
                  Category
                </option>
                <option value="shopping">Shopping</option>
                <option value="eating out">Eating Out</option>
                <option value="entertainment">Entertainment</option>
                <option value="transport">Transport</option>
                <option value="rent">Rent</option>
                <option value="groceries">Groceries</option>
                <option value="other">Other</option>
              </select>
              <input
                className="input dark"
                placeholder="£..."
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              ></input>
              <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              id="transaction"
              name="transaction"
              className="input dark"
              defaultValue={todaysDate}
              required
              ></input>
              <button className="submit darkbutton" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <RecentTransactions data={mockData.recentTransactions} />
        </section>
      </div>
    </>
  );
}

export default Dashboard;
