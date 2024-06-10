import styled from "styled-components";

interface ComponentText {
  bold: boolean;
  size: boolean;
  color: boolean;
}

export const Container = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;  
`
export const Text = styled.span<ComponentText>`
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    font-size: ${props => props.size ? '0.875rem' : '1.25rem'};
    color: ${props => props.color ? props.theme["base-text"]: props.theme["base-subtitle"]};
    padding: 0.75rem 2.5rem 0;
`

