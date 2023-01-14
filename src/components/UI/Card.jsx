import styled from "styled-components"

const CardStyled = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`

function Card(props) {
  return <CardStyled>{props.children}</CardStyled>
}

export default Card
