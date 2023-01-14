import React from "react"
import ExpenseDate from "../expenseDate/ExpenseDate"
import styled from "styled-components"

const ExpenseItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
`

const ExpenseDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
  color: #fff;
  margin-left: 20px;
  font-size: 1.25rem;
`

const ExpenseItemPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
`
const ExpenseTitile = styled.h2`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1px;
  margin: 0 1rem;
  color: white;
`

function ExpenseItem(props) {
  return (
    <ExpenseItemStyled>
      <ExpenseDate date={props.expenseDate} />
      <ExpenseDescription>
        <ExpenseTitile>{props.expenseTitle}</ExpenseTitile>
        <ExpenseItemPrice>${props.expensePrice}</ExpenseItemPrice>
      </ExpenseDescription>
    </ExpenseItemStyled>
  )
}

export default ExpenseItem
