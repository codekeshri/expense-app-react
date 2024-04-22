import React from "react";

const ExpenseForm = () => {
  const inputHandler = () => {
    console.log("input changed");
  };
  return (
    <div>
      <input type="date" />
      <br></br>
      <input type="number" placeholder="Amount" onChange={inputHandler()} />
      <br></br>
      <input type="text" placeholder="Item" onChange={inputHandler()} />
      <br></br>
      <input type="text" placeholder="Mode" />
      <br></br>
      <button onClick={console.log("submitted")}>Submit</button>
      <br />
    </div>
  );
};

export default ExpenseForm;
