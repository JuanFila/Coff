import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;

  p {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 2rem;
  }
  

`
export const ContainerIconColor = styled.div<{ color?: string }> `
   width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color || "black"};
    border-radius:50%;
  
`