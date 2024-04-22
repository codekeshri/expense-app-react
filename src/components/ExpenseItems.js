import React from "react";
import "./ExpenseItems.css";

const ExpenseItems = () => {
  const amount = 100;
  const item = "colors";
  const mode = "cash";
  return (
    <div className="item">
      <li className="item list">{amount + " " + item + " " + mode}</li>
    </div>
  );
};

export default ExpenseItems;
