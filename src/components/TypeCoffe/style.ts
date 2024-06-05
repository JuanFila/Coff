import styled from "styled-components";

export const TypeCoffeeText = styled.span`
  padding: 4px  8px;
 
  display: flex;
  align-items:center;
  justify-content: center;

  color: ${props => props.theme['yellow-dark']};
  background: ${props => props.theme['yellow-light']};
  
  font-weight: bold;
  font-size: 0.625rem;
  text-transform: uppercase;
  
  border-radius: 8px;
  margin-bottom: 1rem;
  
`

