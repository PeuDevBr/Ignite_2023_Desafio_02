import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin: 5rem 0 0 4rem;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p + p {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderContainer = styled.div`
  display: flex;
  gap: 5rem;
`

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 32px;
  margin-top: 2rem;

  width: 526px;
  height: 270px;

  border: 1px solid ${(props) => props.theme['purble-dark']};

  border-radius: 6px 36px;

  font-family: 'Roboto';
  font-style: normal;
  font-size: 16px;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};

  p {
    font-weight: 400;
  }

  span {
    font-weight: 700;
  }

  div {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`
