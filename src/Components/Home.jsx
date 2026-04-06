import Card from "./Card";
import Navbar from "./Navbar";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

function Home({ transactions = [] }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  const filteredTransaction = transactions.filter(
    (item) => item.title !== "Salary",
  );
  const COLORS =['#1B435D','#FF6107','#FFD31D','#3C6255','#A555EC','#8C5A3C','#241023','#8F0E0E']
  return (
    <>
      
      <div className="flex">
        <div>
          <Card title="Total Income" value={income} color="#192655" />
          <Card title="Total Expenses" value={expense} color="#DC2F2F" />
          <Card title="Total Balance" value={balance} color="#00541A" />
        </div>
        <div className="flex gap-4">
          <div className="bg-white w-130 h-112 mt-8 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredTransaction}>
                <XAxis
                  dataKey="title"
                  interval={0}
                  tick={{ fontSize: 10 }}
                  axisLine={{ stroke: "black" }}
                />
                <YAxis axisLine={{ stroke: "black" }} />
                <Tooltip />
                <Bar dataKey="amount" fill="#C93030" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white w-115 h-112 mt-8 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Pie
                  data={filteredTransaction}
                  dataKey="amount"
                  nameKey="title"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label={({title, amount})=>`${title}:${amount}`}
                  
                >
                  {filteredTransaction.map((entry,index)=>(
                    <Cell key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}/>
                  ))}
                  </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
