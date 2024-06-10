import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 23rem;
  height: 5rem;
  border-bottom: 1px solid ${props => props.theme["base-button"]};
  gap: 20px;
  >div{
    width: 100%;
    display: flex;
    flex-direction:column;
  }
`
export const ImageCoffee = styled.img`
  width: 4rem;
  height: 4rem;
  `
export const Infos = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  `
export const Buttons = styled.div`
    display: flex;
    gap: 0.5rem;
  `
export const Coffee = styled.p`
    font-family: "Roboto", sans-serif;
    color: ${props => props.theme["base-subtitle"]};
  `
export const Value = styled.p`
    font-weight: bold;
    font-family: "Baloo 2", sans-serif;
    color: ${props => props.theme["base-subtitle"]};
  `
export const Input = styled.input`
    width: 4.5rem;
    text-align: center;
    height: 2rem;
    background: ${props => props.theme["base-input"]};
    border: 1.5px solid ${props => props.theme["base-button"]};
    padding: 2px;
    color: ${props => props.theme["base-text"]};
    border-radius: 4px;
  `
export const Button = styled.button`
    width: 5.6rem;
    height: 2rem;
    padding: 2px;
    background: ${props => props.theme["base-input"]};
    border: transparent;
    color: ${props => props.theme["base-text"]};
    border-radius: 4px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 4px;
  `