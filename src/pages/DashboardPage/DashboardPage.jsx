import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [hidden, setHidden] = useState(true);
  const [allOrderReq, setAllOrderReq] = useState([]);
  useEffect(() => {
    fetch("https://design-world-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch("https://design-world-server.vercel.app/AllOrderList")
      .then((res) => res.json())
      .then((data) => {
        setAllOrderReq(data);
      });
  }, []);

  const sumOfSales = allOrderReq.reduce(
    (pre, current) => parseFloat(pre + current.price),
    0
  );

  setTimeout(() => {
    setHidden(false);
  }, 1000);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const SaleData = [
    { name: "Group A", value: sumOfSales },
    { name: "Group B", value: 300 },
  ];

  const COLORS = ["#0088FE", "#FFBB28"];

  return (
    <div>
      <h1 className="text-center text-4xl my-14 font-bold">
        <span className="text-sky-700">DASH</span>
        <span className="text-orange-600">BOARD</span>
      </h1>

      {hidden ? (
        <LineChart width={500} height={300} data={data} className="mx-auto">
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#ea580c" />
          <Line type="monotone" dataKey="pv" stroke="#0369a1" />
        </LineChart>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <PieChart width={200} height={200} className="mx-auto">
              <Pie
                data={SaleData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {SaleData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <p className="text-3xl text-center">Sales ${sumOfSales}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://static.prod01.ue1.p.pcomm.net/blackbaud/user_content/photos/000/006/6783/a6132a5cd55abcae190bc82567ca8a47-original-users.png" alt="" />
            <p className="text-3xl text-center">Total Client: {users.length}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
