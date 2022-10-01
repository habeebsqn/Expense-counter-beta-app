import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [Expand, setExpand] = useState(false);

  const onSaveExpenseDatahandler = (expenseData) => {
    const NewExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(NewExpense);
    //console.log(NewExpense);
    setExpand(false);
  };

  const expandHandler = () => {
    setExpand(true);
  };

  const cancelButtonHandler = () => {
    setExpand(false);
  };

  return (
    <div className="new-expense">
      {!Expand && (
        <button type="button" onClick={expandHandler}>
          .Add new Expense
        </button>
      )}
      {Expand && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDatahandler}
          cancelButton={cancelButtonHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
