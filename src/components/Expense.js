import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseForm from "./ExpenseForm";

let count = 0;
const Expense = () => {
  let [title, setTitle] = useState("ok");
  let clickHandler = () => {
    setTitle("clicked " + ++count);
  };
  return (
    <>
      <Card className="card">
        <div className="cardexpense">
          <ExpenseForm />
        </div>
      </Card>
      <br />
      <Card className="card">
        <div className="cardexpense">
          <ExpenseDate />
          <ExpenseItems />
          <button onClick={clickHandler}>Change</button>
        </div>
      </Card>
    </>
  );
};

export default Expense;
