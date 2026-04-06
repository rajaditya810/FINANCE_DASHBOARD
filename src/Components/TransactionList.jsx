import Home from "./Home";
import React, { useState } from "react";

function TransactionList({transactions =[]}) {
   const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
     <div className="flex justify-center items-center gap-4 mt-10">
      {/* Left text */}
      <span className="font-medium text-white">VIEWER</span>

      {/* Toggle */}
      <div
        onClick={() => setIsAdmin(!isAdmin)}
        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
          isAdmin ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${
            isAdmin ? "translate-x-8" : "translate-x-0"
          }`}
        ></div>
      </div>

      {/* Right text */}
      <span className="font-medium text-white">ADMIN</span>
    </div>
    

    <div className="p-4 bg-white rounded-lg shadow-md m-8">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

      {transactions.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-3"
        >
          <div>
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>

          <p
            className={`font-semibold ${
              item.type === "income"
                ? "text-green-600"
                : "text-red-500"
              }`}
          >
            {item.type === "income" ? "+" : "-"}₹{item.amount}
          </p>
        </div>
      ))}
    </div>
    
      {isAdmin && (
        <div className=" flex justify-center ">
    <button className="button px-4 py-2 rounded mb-4">ADD TRANSACTION</button>
    </div>
      )}
    

 </>
  );
}

export default TransactionList;