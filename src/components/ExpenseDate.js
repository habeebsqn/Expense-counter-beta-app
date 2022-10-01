import "./ExpenseDate.css";

const ExpenseDate = (data) => {
  /*the constant below basically holds the logic of display the month in the date*/
  const dateMonth = data.date.toLocaleString("en-US", { month: "short" });
  /*the constant below basically holds the logic of display the day in the date*/
  const dateDay = data.date.toLocaleString("en-US", { day: "2-digit" });
  /*the constant below basically holds the logic of display the year in the date*/
  const dateYear = data.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{dateMonth}</div>
      <div className="expense-date__day">{dateDay}</div>
      <div className="expense-date__year">{dateYear}</div>
    </div>
  );
};

export default ExpenseDate;
