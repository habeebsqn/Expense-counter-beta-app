import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

/*this is an array of expenses item with their properties */
const initialExpenses = [
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e1", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expensesList, setexpensesList] = useState(initialExpenses);

  const onAddNewExpenseHandler = (newExpense) => {
    setexpensesList((PrevExpenses) => [newExpense, ...PrevExpenses]);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddNewExpense={onAddNewExpenseHandler} />

      <Expenses items={expensesList} />
    </div>
  );
}

export default App;
