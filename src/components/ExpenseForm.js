import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //const [formIsValid, setFormIsValid] = useState("");

  //const [UserInput, setUserInput] = useState({
  // enteredTtile: "",
  // enteredPrice: "",
  // enteredDate: "",
  //});

  const titleChangeHandler = (event) => {
    const newTitle = event.target.value;
    setEnteredTitle(newTitle);
  };

  const priceChangeHandler = (event) => {
    const newPrice = event.target.value;
    setEnteredPrice(newPrice);
  };

  const dateChangeHandler = (event) => {
    const newDate = event.target.value;
    setEnteredDate(newDate);
  };

  const formSubmitHandler = (event) => {
    //the line of code (33) below basically prevent the submit function to initial by default which make the entire
    //application to load again and allow us to use javascript to set the initiation period
    event.preventDefault();

    // if (
    //   enteredTitle.trim() === "" ||
    //   enteredPrice === "" ||
    //   enteredDate === ""
    // ) {
    //   setFormIsValid(false);
    //   return;
    // }

    // setFormIsValid(true);

    const expenseData = {
      title: enteredTitle,
      amount: +enteredPrice,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            required
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            required
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            required
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.cancelButton}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
