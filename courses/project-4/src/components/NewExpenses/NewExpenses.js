import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [showForm, setShowForm] = useState(false);

  //Receive values from ExpenseForm, assign ID
  const saveExpenseValuesHandler = (values) => {
    const expenseValues = {
      ...values,
    };

    //Pass values up to App.js
    props.onAddExpense(expenseValues);

    setShowForm(false);
  };

  const formHandler = () => {
    setShowForm((prevState) => {
      if (prevState === false) {
        return true;
      }
      if (prevState === true) {
        return false;
      }
    });
  };

  return (
    <div className="new-expenses">
      {!showForm && <button onClick={formHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          formHandler={formHandler}
          onSaveExpenseValues={saveExpenseValuesHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
