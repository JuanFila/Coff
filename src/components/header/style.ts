import styled from "styled-components";

export const HeaderContainer = styled.header `
  width: 100%;
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`

export const BoxShop = styled.nav `
  display: flex;
  gap: 12px;
`
export const Shop = styled.div `
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  background: ${props => props.theme['yellow-light']};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Locale = styled.div `
  width: auto;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${props => props.theme['purple-light']};

  gap: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`