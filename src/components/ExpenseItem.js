import React, { useState } from "react";

import ExpenseDate from "./ExpenseData";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [Title, setTitle] = useState(props.title);
  const [Expense, setExpense] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Upadated!");
    console.log("Clicked!");
  };
  const changeExpense = () => {
    setExpense(100);
    console.log("Clicked!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">${Expense}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeExpense}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem;
