import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = () => {
  return (
    <div className="date">
      <li className="date list">{new Date().toDateString()}</li>
    </div>
  );
};

export default ExpenseDate;
