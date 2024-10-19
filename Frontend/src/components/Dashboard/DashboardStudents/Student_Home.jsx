import React from "react";
import {
  BsFillArchiveFill,
  BsFillBellFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../../../index.css";
const Student_Home = () => {
  const data = [
    {
      name: "Section A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Section B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Section C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Section D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Section E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Section F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Section G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <main className="main-container">
        <div className="main-title">
          <h3>DASHBOARD</h3>
        </div>

        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <h3>Students</h3>
              <BsFillArchiveFill className="card_icon" />
            </div>
            <h1>45</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Library</h3>
              <BsFillGrid3X3GapFill className="card_icon" />
            </div>
            <h1>40 One subject book</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Teachers</h3>
              <BsPeopleFill className="card_icon" />
            </div>
            <h1>33</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>ALERTS</h3>
              <BsFillBellFill className="card_icon" />
            </div>
            <h1>12</h1>
          </div>
        </div>

        <div className="charts">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </>
  );
};

export default Student_Home;
