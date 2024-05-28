import styled from "styled-components";

export const CardContainerCoffee = styled.div`
  width: 16rem;
  height: auto;

  display:flex;
  align-items: center;
  flex-direction: column;

  display: relative;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  background-color: ${props => props.theme['base-card']};

  margin-top: 4.375rem;
`
export const CoffeName = styled.h2`
  margin-bottom: 0.5rem;
`
export const CoffeDescription = styled.p`
  margin-bottom: 2rem;
`


export const ImageCoffee = styled.img`
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
      background: ${props => props.theme['base-button']};
      color: ${props => props.theme['base-text']};
      text-align: center;

      &::placeholder {
        color: ${props => props.theme['base-text']};
        text-align: center;
      }
`

export const ContainerPrice = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4375rem;
    margin-bottom: 20px;
`

const MoedaAndPrice = styled.label `
 color: ${props => props.theme['base-text']};
  font-family: "Baloo 2", sans-serif;
  font-weight: bold;
`

export const Moeda = styled(MoedaAndPrice)`
  font-size: 16px;
`

export const Price = styled(MoedaAndPrice)`
  font-size: 26px;
`

export const Adefinir2 = styled.div`
 display: flex;
 gap:8px;
`
