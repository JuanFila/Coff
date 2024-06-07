import styled from "styled-components";



export const CardContainerCoffee = styled.div`
  width: 16rem;
  height: auto;

  display:flex;
  flex-direction: column;
  align-items: center;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  background-color: ${props => props.theme['base-card']};

  margin-top: 4.375rem;
`

export const TypeCoffeContainer = styled.div`
  width: 100%;
  margin-top: -2rem;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  `

export const CoffeName = styled.h2`
  font-family: "baloo 2";
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`
export const CoffeDescription = styled.p`
  font-family: "Roboto";
  font-size: 0.875rem;
  margin-bottom: 2rem;
  color: ${props => props.theme["base-text"]};
  text-align: center;
`

export const ImageCoffee = styled.img`
    width: 7.5rem;
    position: relative;
    bottom: 2rem;
    margin-bottom: 0.5rem;

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
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 1.4375rem;
    margin-bottom: 20px;
`

export const Description = styled.div`
    width: 13.5rem;
    height: auto;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;


`

const MoedaAndPrice = styled.label`
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

export const ContainerShop = styled.div`
 display: flex;
 gap:8px;
`
