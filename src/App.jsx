import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import  TransactionList from "./Components/TransactionList";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Navbar from "./Components/Navbar";
window.history.replaceState({},"","/")

function App() {
  const [Income, setIncome] = useState(12000);
  const [Expenses, setExpenses] = useState(1200);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(Income - Expenses);
  }, [Income, Expenses]);
  const transactions = [
    {
      id: 1,
      title: "Salary",
      amount: 25000,
      type: "income",
      date: "05 Apr 2026",
    },
    {
      id: 2,
      title: "Food",
      amount: 4000,
      type: "expense",
      date: "04 Apr 2026",
    },
    {
      id: 3,
      title: "Recharge",
      amount: 3000,
      type: "expense",
      date: "03 Apr 2026",
    },
    {
      id: 4,
      title: "Groceries",
      amount: 5000,
      type: "expense",
      date: "04 Apr 2026",
    },
    {
      id: 5,
      title: "Sports",
      amount: 5000,
      type: "expense",
      date: "04 Apr 2026",
    },
    {
      id: 6,
      title: "EMI",
      amount: 3000,
      type: "expense",
      date: "04 Apr 2026",
    },
    {
      id: 7,
      title: "Clothes",
      amount: 2500,
      type: "expense",
      date: "04 Apr 2026",
    },
    {
      id: 8,
      title: "Savings",
      amount: 2000,
      type: "expense",
      date: "04 Apr 2026",
    },
  ];

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home transactions={transactions}/>} />
          <Route path="/transactions" element={<TransactionList transactions={transactions}/>} />
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
