import React from "react";
import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (data) => {
  /*receiving data via "props" from Expenses.js, the const belove is recieving the date property */
  const date = data.date;
  /*receiving data via "props" from Expenses.js, the const belove is recieving the title property */
  const title = data.title;
  /*receiving data via "props" from Expenses.js, the const belove is recieving the price property */
  const price = data.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
