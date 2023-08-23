import React, { useState } from "react";

import ExpenseListContent from "./ExpenseListContent";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart.js";
import "./ExpenseList.css";

function ExpenseList(props) {
  //2022 is default year
  const [filterYear, setFilterYear] = useState("2022");

  //Receive Filter Value from ExpenseFilter
  const onFilterSelectHandler = (filterSelection) => {
    setFilterYear(filterSelection);
  };

  //Create a filtered array of expenses using filter()
  const filteredExpenses = props.items.filter((element) => {
    return element.date.getFullYear() === parseInt(filterYear);
  });

  //Return a list of cards of each expense
  return (
    <div>
      <Card className="expense-list">
        <ExpenseFilter
          defaultYear={filterYear}
          onFilterSelect={onFilterSelectHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseListContent items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default ExpenseList;
