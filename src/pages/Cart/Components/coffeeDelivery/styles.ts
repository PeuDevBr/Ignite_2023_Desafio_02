import styled from 'styled-components'

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  margin-top: 1rem;
  gap: 24px;

  position: absolute;
  width: 448px;
  left: 762px;
  top: 142px;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const CoffeeCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;
  gap: 56px;

  width: 375px;
  height: 80px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;

    color: ${(props) => props.theme['base-text']};
  }

  .Info {
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 20px;

    width: 255px;
    height: 64px;

    img {
      width: 64px;
      height: 64px;
    }
  }

  .Details {
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 8px;

    width: 171px;
    height: 61px;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .Actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 171px;
    height: 32px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;

      width: 72px;
      height: 32px;

      background: #e6e5e5;
      border-radius: 6px;
    }

    button {
      width: 91px;
      height: 32px;
      gap: 4px;

      padding: 0px 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e6e5e5;
      border: none;
      cursor: pointer;

      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  width: 368px;
  height: 92px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }
  }

  .totalContent {
    p {
      font-weight: 700;
      font-size: 20px;
    }
  }
`
