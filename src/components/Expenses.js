import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((elem) => {
        return (
          <ExpenseItem
            key={elem.id}
            title={elem.title}
            amount={elem.amount}
            date={elem.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
