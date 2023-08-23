import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Use state for the form elements
  const [tempValues, setTempValues] = useState({
    tempTitle: "",
    tempAmount: "",
    tempDate: "",
  });
  /*
    Could have multiple states:
    const [tempTitle, setTempTitle] = useState("");
    const [tempTitle, setTempAmount] = useState("");
    const [tempTitle, setTempDate] = useState("");
    */

  //Define Event when element is changed
  const titleChangeHandler = (event) => {
    setTempValues((prevState) => {
      return {
        ...prevState,
        tempTitle: event.target.value,
      };
    });
    /* 
        Could have multiple states:
        setTempTitle(event.target.value);
        */
  };
  const amountChangeHandler = (event) => {
    setTempValues((prevState) => {
      return {
        ...prevState,
        tempAmount: event.target.value,
      };
    });
    //setTempAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setTempValues((prevState) => {
      return {
        ...prevState,
        tempDate: event.target.value,
      };
    });
    //setTempDate(event.target.value);
  };

  const submitHandler = (event) => {
    //By defualt, page relaods, which is bad
    event.preventDefault();

    //Rename variables. Convert Date because JS is weird.
    //console.log(tempValues.tempDate);
    const values = {
      title: tempValues.tempTitle,
      amount: +tempValues.tempAmount,
      date: new Date(tempValues.tempDate.replace(/-/g, '/').replace(/T.+/, ''))
    }
    //console.log(values.date);

    //Pass values up to NewExpenses, reset form values
    props.onSaveExpenseValues(values);
    setTempValues({
      tempTitle: "",
      tempAmount: "",
      tempDate: "",
    });
  };

  //Return form for adding new expenses
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expenses__controls">
        <div className="new-expenses__control">
          <label>Title</label>
          <input
            type="text"
            value={tempValues.tempTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expenses__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={tempValues.tempAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expenses__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={tempValues.tempDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expenses__actions">
        <button type="button" onClick={props.formHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
