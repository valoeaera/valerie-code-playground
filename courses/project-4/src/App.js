import React, { useState } from "react";

import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const initialExpenses = [
  { key: "1", title: "Car Insurance", amount: 249.67, date: new Date(2022, 2, 28) },
  { key: "2", title: "Toilet Paper", amount: 40.0, date: new Date(2021, 3, 2) },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  //Receive Expenses from NewExpenses
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return ([
        expense,
        ...prevExpenses
      ]);
    });
  };

  //Return Entire App
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
};

export default App;
