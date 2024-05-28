import styled from "styled-components";

export const TypeCoffeeText = styled.p `
  color: ${props => props.theme['yellow-dark']};
  font-weight: bold;
  font-size: 0.625rem;
  text-transform: uppercase;
`
export const ContainerTypeCoffee = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  margin-top: -2.5rem;
  margin-bottom: 1rem;
  background: ${props => props.theme['yellow-light']};
  width: 5rem;
  height: 1.3rem;
`