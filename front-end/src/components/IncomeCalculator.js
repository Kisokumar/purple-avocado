function IncomeCalculator() {
    const incomeData = {}

    const [grossWage, setGrossInc] = useState("");
    const [pension, setPension] = useState("");
    const [studentLoan, setStudentLoan] = useState("");

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const transactionData = { transactionType, amount, date}
    //   console.log(transactionData)
    //   axios.post('http://...', userData)
    //   .then(response => {
    //     // handle the response here
    //   })
    //   .catch(error => {
    //     // handle the error here
    //   })
    // };

    return (
      <>
        <div className="IncomeCalculator-container">
          <div className="IncomeCalculator-welcome">
            <h1>Let's calculate your income, {userData(username).name}!</h1>
          </div>

          <section className="recent-and-addd-transactions">
          <div className="add-transaction">
            <h1>Add Transaction</h1>
            <div>
            <form
                onSubmit={handleSubmit}
                id="income-form"
                className="addtransaction"
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
          </section>
        </div>
      </>
    );
  }

  export default IncomeCalculator;
