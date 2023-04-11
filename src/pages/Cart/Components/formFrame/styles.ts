import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-top: 1rem;
  gap: 32px;
  width: 640px;
  height: 372px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 560px;
  height: 44px;

  font-family: 'Roboto';
  font-weight: 400;
  line-height: 1.3;

  .title {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .description {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;
    height: 42px;

    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
  }

  /*Remove as setas que ficam dentro do campo input do tipo número */

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .zipCode {
    width: 200px;
  }

  .street {
    width: 560px;
  }

  .confirmationButton {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;

    width: 368px;
    height: 46px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme.yellow};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: ${(props) => props.theme.white};

    :hover {
      filter: brightness(95%);
      cursor: pointer;
    }

    :disabled {
      cursor: not-allowed;
    }
  }
`

export const NumberContent = styled.div`
  display: flex;
  gap: 12px;
  width: 560px;

  .number {
    width: 200px;
  }

  .complement {
    width: 348px;
  }
`
export const CityContent = styled.div`
  display: flex;
  gap: 12px;
  width: 560px;

  .district {
    width: 200px;
  }

  .city {
    width: 276px;
  }

  .state {
    width: 60px;
  }
`
