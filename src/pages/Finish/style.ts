import styled from "styled-components";

export const Container = styled.div`
  flex: 1; 
`
export const Body = styled.body`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 89vh; 
  gap: 6.375rem;
  margin-top: 5rem;
`

export const InformationBox = styled.div`
  
  width: 32.875rem;
  height: 16.875rem;
  border: double 1px transparent;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  background-image: linear-gradient(white, white), 
                    linear-gradient(to right, ${props => props.theme["yellow-dark"]}, ${props => props.theme["purple-dark"]});
  background-origin: border-box;
  background-clip: content-box, border-box;
  
  >div{
    display: flex;
    gap: 12px;
    padding: 2.5rem 2.8125rem;
  }
`
export const ContainerImage = styled.div`
 width: 32.75rem;
 height: auto;
 margin-top: 6.8rem;
`
export const Info = styled.div`
  width: 32.875rem;
  height: 16.875rem;

  h2 {
    font-size: 2rem;
    font-family: "Baloo 2";
    font-weight: bold;
    color: ${props => props.theme["yellow-dark"]};
  }
`
export const Text = styled.div`
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 2.5rem;  
`
export const Icon = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme["purple-dark"]};
   
`
