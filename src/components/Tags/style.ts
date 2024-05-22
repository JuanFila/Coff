import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  display: flex;
  
  div {
    background-color: ${props => props.theme["purple-light"]};
    border-radius:50%;
  }
`