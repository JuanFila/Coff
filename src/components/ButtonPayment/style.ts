import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-weight: 400;
  width: 11.125rem;
  height: 3.1875rem;
  border: none;
  background-color: ${props => props.theme["base-button"]};
  font-size: 0.75rem;
  color:  ${props => props.theme["base-text"]};
  text-transform: uppercase;
`