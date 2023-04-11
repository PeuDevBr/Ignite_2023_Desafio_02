import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0 60px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 588px;
  height: 192px;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 4rem;
`

export const CoffeeListContainer = styled.div`
  position: absolute;
  height: 1645px;
  top: 608px;

  h1 {
    position: absolute;
    width: 193px;
    height: 42px;
    left: 1rem;
    top: -2rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }

  .gridContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    width: 99vw;
    max-width: 1100px;
    justify-content: center;
    gap: 2rem;

    margin-top: 3rem;
  }
`
