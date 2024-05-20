import { createGlobalStyle } from "styled-components";

export const GlobalStye = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme['yellow-dark']}
 }

 body {
  background: ${props => props.theme['background-color']};
  color: ${props => props.theme['base-title']};
  -webkit-font-smoothing: antialiased;
 }

body, input, button, textarea {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400px;
}
`