import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 32px;

  width: 640px;
  height: 207px;

  background-color: ${(props) => props.theme['base-card']};
`

export const PaymentContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;

      color: ${(props) => props.theme['base-subtitle']};
    }

    span + span {
      font-size: 14px;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const ButtonContainer = styled.div`
  width: 560px;
  height: 51px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  .selected {
    border: 1px solid #8047fb;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;

    width: 178.67px;
    height: 51px;
    gap: 12px;

    border: transparent;
    border-radius: 6px;
    cursor: pointer;

    background-color: ${(props) => props.theme['base-button']};

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;

      color: ${(props) => props.theme['base-text']};
    }
  }

  button:hover {
    filter: brightness(95%);
  }
`
