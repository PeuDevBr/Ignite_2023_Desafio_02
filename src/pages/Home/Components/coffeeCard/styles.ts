import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;

  margin: 1rem;

  img {
    width: 120px;
    height: 120px;
    margin-top: -40px;
  }

  .tagsContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;

    margin-top: 1rem;
  }

  .tags {
    background-color: ${(props) => props.theme['yellow-light']};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;

    height: 21px;

    border-radius: 100px;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-size: 10px;
      font-weight: 700;
      line-height: 130%;
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  .title {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    margin-top: 1rem;
  }

  .description {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    padding: 10px 20px;
    color: ${(props) => props.theme['base-label']};

    text-align: center;
  }

  .priceContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
    margin-top: 2rem;
    gap: 16px;

    p {
      font-family: 'Baloo 2';
      font-style: normal;
      font-size: 18px;

      span {
        font-weight: 800;
        font-size: 34px;
        line-height: 31.2px;
        margin-left: 0.2rem;
      }
    }
  }

  .addContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    height: 38px;
    width: 118px;
  }
  .counterContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 72px;
    height: 38px;

    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;

      width: 14px;
      height: 14px;

      cursor: pointer;
    }

    span {
      margin-top: -5px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-align: center;

      width: 14px;
      height: 14px;
    }
  }

  .iconContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 38px;
    height: 38px;

    cursor: pointer;

    background-color: ${(props) => props.theme['purble-dark']};
    border-radius: 6px;
  }
`
