import ExpenseItem from "../expenseItem/ExpenseItem"
import styled from "styled-components"

const ExpenseListStyled = styled.ul`
  color: white;
  text-align: center;
`

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h1 className="expenses-list__fallback">No Expense Found</h1>
  }
  return (
    <ExpenseListStyled>
      {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={index}
            expenseTitle={expense.title}
            expensePrice={expense.amount}
            expenseDate={expense.date}
          />
        )
      })}
    </ExpenseListStyled>
  )
}

export default ExpensesList
