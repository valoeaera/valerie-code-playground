import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseListContent.css";


const ExpenseListContent = (props) => {
  //Only display list of content if a list exists for the current filter. Message user otherwise.
  if (props.items.length === 0) {
    return <p className="expense-list-content__fallback">No Expenses found.</p>;
  }

  return (
    <ul className="expense-list-content">
        {props.items.map((expenses, index) => (
            <ExpenseItem
            key={index}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
            />
        ))}
    </ul>
  );
};

export default ExpenseListContent;
