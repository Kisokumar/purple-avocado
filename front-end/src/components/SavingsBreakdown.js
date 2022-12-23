import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    month: "Jan",
    Shares: 4000,
    Cash: 2400,
    Bitcoin: 2400,
    Total: 9000,
  },
  {
    month: "Feb",
    Shares: 3000,
    Cash: 1398,
    Bitcoin: 2210
  },
  {
    month: "Mar",
    Shares: 2000,
    Cash: 9800,
    Bitcoin: 2290
  },
  {
    month: "Apr",
    Shares: 2780,
    Cash: 3908,
    Bitcoin: 2000
  },
  {
    month: "May",
    Shares: 1890,
    Cash: 4800,
    Bitcoin: 2181
  },
  {
    month: "Jun",
    Shares: 2390,
    Cash: 3800,
    Bitcoin: 2500
  },
  {
    month: "July",
    Shares: 3490,
    Cash: 4300,
    Bitcoin: 2100
  }
];

export default function SavingsBreakdown() {
  return (
    <div className='savings-container'>
      <h1 style={{color: "white"}}>Savings Breakdown</h1>
      <AreaChart
      className="dashboard"
        width={500}
        height={400}
        data={data}
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
        <Area
          type="monotone"
          dataKey="Shares"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="Cash"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="Bitcoin"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Legend />
      </AreaChart>
    </div>
  );
}
