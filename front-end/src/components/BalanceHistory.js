import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, 
  AreaChart, 
  Area
} from "recharts";

const data = [
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
  }
];

export default function App() {
  return (
    <div className="dashboard">
        <h3>Account Balance</h3>
    <AreaChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Balance" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
      </div>
  );
}