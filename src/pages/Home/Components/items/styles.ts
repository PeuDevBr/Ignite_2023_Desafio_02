import styled from 'styled-components'

export const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 300px;
  height: 32px;
  left: 0px;
  top: 0px;
  margin-bottom: 1rem;

  span {
    font-family: 'Roboto', sans-serif;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    border-radius: 50%;
  }
`
