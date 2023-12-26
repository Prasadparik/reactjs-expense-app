import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const getYearFromDate = (date) => date.getFullYear();
  let filterData = props.items.filter(
    (elem) => getYearFromDate(elem.date) == filteredYear
  );

  let expensesContent = <p style={{ color: "#fff" }}>No expenses found</p>;

  if (filterData.length > 0) {
    expensesContent = filterData.map((elem) => {
      return (
        <ExpenseItem
          key={elem.id}
          title={elem.title}
          amount={elem.amount}
          date={elem.date}
        />
      );
    });
  }
  console.log("TEST :: ", filterData);
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
      {filterData.length === 1 ? (
        <p style={{ color: "#fff" }}>
          Only single Expense here. Please add more...
        </p>
      ) : (
        <></>
      )}
    </Card>
  );
}

export default Expenses;
