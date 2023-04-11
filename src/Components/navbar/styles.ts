import styled from 'styled-components'

export const NavBarContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;

  height: 104px;

  a {
    img {
      height: 2.5rem;
      width: 5.25rem;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 220px;
    height: 38px;
  }

  .cartContainer {
    background-color: ${(props) => props.theme['yellow-light']};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 36px;
    height: 36px;
    border-radius: 6px;

    &:hover {
      color: ${(props) => props.theme['purble-dark']};
    }
  }

  .cartCont {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    color: #ffffff;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #c47f17;
    margin-left: -25px;
    margin-top: -30px;
  }
`

export const LocationContainer = styled.a`
  background-color: ${(props) => props.theme['purble-light']};
  color: ${(props) => props.theme.purble};

  font-family: 'Roboto';
  font-style: normal;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 143px;
  height: 36px;

  border-radius: 6px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purble-dark']};
  }
`
