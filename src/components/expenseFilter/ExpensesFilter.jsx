import styled from "styled-components"

const ExpenseFilter = styled.div`
  color: white;
  padding: 0 1rem;
`
const ExpenseFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`

const ExpenseFilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`
const ExpenseFilterSelect = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`

const ExpensesFilter = ({ selectedYear, onChangeSelectedYear }) => {
  return (
    <ExpenseFilter>
      <ExpenseFilterControl>
        <ExpenseFilterLabel>Filter by year</ExpenseFilterLabel>
        <ExpenseFilterSelect
          value={selectedYear}
          onChange={onChangeSelectedYear}
        >
          <option value="All">Select All</option>
          <option value="2025">2021</option>
          <option value="2024">2022</option>
          <option value="2023">2023</option>
          <option value="2022">2024</option>
        </ExpenseFilterSelect>
      </ExpenseFilterControl>
    </ExpenseFilter>
  )
}

export default ExpensesFilter
