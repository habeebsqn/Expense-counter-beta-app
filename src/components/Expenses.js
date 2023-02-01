import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Expenseschart from "./Expenseschart";

const Expenses = (props) => {
  const [updateSelectedYear, setupdateSelectedYear] = useState("2020");

  const onRecieveSelectedYearHandler = (selectedYear) => {
    setupdateSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === updateSelectedYear;
  });

  /*basically the jsx code here is recieving data from app.js via "props",
  to be specific its recieving the expenses items and their property to 
  pass them to each expenseitem component */
  return (
    <Card className="expenses">
      <ExpensesFilter
        onRecieveSelectedYear={onRecieveSelectedYearHandler}
        defaultValue={updateSelectedYear}
      />
      <Expenseschart expenses={filteredExpenses} />
      <ExpensesList filtered={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
