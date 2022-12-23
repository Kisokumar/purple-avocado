import { useState } from "react";
import axios from "axios";

function IncomeCalculator() {
  const [grossWage, setGrossWage] = useState("");
  const [pension, setPension] = useState("");
  const [studentLoan, setStudentLoan] = useState("");
  // const [result, setResult] = useState("0px");
  // const [submitOpacity, setSubmitOpacity] = useState("");
  const [totalPay, setTotalPay] = useState("");

  const incomeData = { grossWage, studentLoan, pension };

  const [incomeResults, setIncomeResults] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(incomeData);
    setIncomeResults(
      `With an annual salary before tax of £${grossWage}, ${studentLoan} and a ${pension}% pension contribution, here's your salary breakdown:`
    );
    setTotalPay(calculate(grossWage, studentLoan, pension));
    // setResult("200px");
    // setSubmitOpacity("0px");

    axios
      .post("http://...", incomeData)
      .then((response) => {
        // handle the response here
      })
      .catch((error) => {
        // handle the error here
      });
  };

  function calculate(wage, studentLoan, pension) {
    let totalPay = 0;

    let pa = 12570;
    let br = (50270 - 12571) * 0.2;
    let hr = (150000 - 50271) * 0.4;

    pension = wage * (pension / 100);
    //Deducting tax
    if (wage >= 150000) {
      totalPay += (wage - 150000) * 0.55;
      totalPay += pa + br + hr;
    } else if (wage >= 50271) {
      totalPay += (wage - 50271) * 0.6;
      totalPay += pa + br;
    } else if (wage >= 12571) {
      totalPay += (wage - 12571) * 0.8;
      totalPay += pa;
    } else {
      totalPay += wage;
    }

    // //deducting NI
    if (wage >= 50284) {
      totalPay -= (wage - 50284) * 0.0325;
      totalPay -= 4995.25;
    } else if (wage >= 12584) {
      totalPay -= (wage - 12584) * 0.1325;
    }
    //deducting student loan
    if (studentLoan === "Plan 1 student loan" && wage > 20184) {
      totalPay -= wage * 0.09;
    }
    if (studentLoan === "Plan 2 student loan" && wage > 27288) {
      totalPay -= wage * 0.09;
    }
    if (studentLoan === "Plan 4 (scotland only) student loan" && wage > 25368) {
      totalPay -= wage * 0.09;
    }

    totalPay -= pension;
    totalPay = totalPay.toFixed(2);

    return (
      ` £` +
      totalPay +
      ` per year takehome. That's £` +
      (totalPay / 12).toFixed(2) +
      ` per month.`
    );
  }

  return (
    <>
      <div className="IncomeCalculator-welcome">
        <h1></h1>
      </div>

      <section className="income-calculator">
        <div>
          <div>
            <form
              onSubmit={handleSubmit}
              id="income-form"
              className="income-form"
            >
              <div className="income-input">
                <h1>Let's calculate your income!</h1>
                <input
                  className="input"
                  placeholder="£...Yearly pay"
                  type="number"
                  value={grossWage}
                  onChange={(e) => setGrossWage(e.target.value)}
                  required
                ></input>

                <select
                  className="input"
                  onChange={(e) => setStudentLoan(e.target.value)}
                  required
                >
                  <option value="" disabled selected>
                    {" "}
                    Student Loan?
                  </option>
                  <option value="Plan 1 student loan">
                    NI and pre-2012 Eng + Wales (Plan 1)
                  </option>
                  <option value="Plan 2 student loan">
                    Eng + Wales post-2012 (Plan 2)
                  </option>
                  <option value="Plan 4 (scotland only) student loan">
                    Scotland post-1998 (Plan 4)
                  </option>
                  <option value="no student loan">No student loan</option>
                </select>

                <input
                  className="input"
                  placeholder="%..your pension contribution"
                  type="number"
                  value={pension}
                  onChange={(e) => setPension(e.target.value)}
                  required
                ></input>
                <button className="submit darkbutton" type="submit">
                  Submit
                </button>
                <section className="results">
                  {incomeResults}
                  {totalPay}
                </section>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default IncomeCalculator;
