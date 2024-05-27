import styled from "styled-components";

export const CardContainerCoffee = styled.div`
  width: 16rem;
  height: 19.375rem;

  display:flex;
  align-items: center;
  flex-direction: column;

  display: absolute;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  background-color: ${props => props.theme['base-card']};

  p {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:8px;

  }
`
export const ImageCoffee = styled.img `
    width: 7.5rem;
    position: relative;
    bottom: 3rem;
`

export const ButtonShop = styled.button`
      width: 2.375rem;
      height: 2.375rem;
      border: transparent;
      background: ${props => props.theme['purple-dark']};
      border-radius: 6px;
`
export const Input = styled.input`
      width: 4.5rem;
      height: 2.375rem;
      border: transparent;
      border-radius: 6px;
      background: ${props => props.theme['base-input']};
      color: black;
`

export const Price = styled.p `
  color: ${props => props.theme['base-text']};
  font-family: "Baloo 2", sans-serif;
  font-weight: bold;
  font-size: 26px;
`