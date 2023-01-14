import React, { useState } from "react"
import styled from "styled-components"

const NewExpenseControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`

const LabelStyled = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`

const InputStyled = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`
const NewExpenseActions = styled.div`
  text-align: right;
`

const defaultValues = {
  enteredTitle: "",
  enteredDate: "",
  enteredAmount: "",
}

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState(defaultValues)

  const changeValuesHandler = (key) => {
    return (e) => {
      setUserInput((prevState) => {
        return {
          ...prevState,
          [key]: e.target.value,
        }
      })
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    }
    const isFormNotFilled = Object.values(userInput).some((value) => !value)
    if (isFormNotFilled) {
      return alert("Please, fill all fields!")
    }
    props.onSaveExpenseData(expenseData)
    setUserInput(defaultValues)
  }

  const cancelHandler = (event) => {
    event.preventDefault()
    props.onShowForm()
  }
  return (
    <form onSubmit={submitHandler}>
      <NewExpenseControls>
        <div>
          <LabelStyled>Заголовок</LabelStyled>
          <InputStyled
            type="text"
            value={userInput.enteredTitle}
            onChange={changeValuesHandler("enteredTitle")}
          />
        </div>
        <div>
          <LabelStyled>Количество</LabelStyled>
          <InputStyled
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={changeValuesHandler("enteredAmount")}
          />
        </div>
        <div>
          <LabelStyled>Датировать</LabelStyled>
          <InputStyled
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={userInput.enteredDate}
            onChange={changeValuesHandler("enteredDate")}
          />
        </div>
      </NewExpenseControls>
      <NewExpenseActions>
        <button type="submit">Добавить расходы</button>
        <button onClick={cancelHandler}>Отмена</button>
      </NewExpenseActions>
    </form>
  )
}

export default ExpenseForm
