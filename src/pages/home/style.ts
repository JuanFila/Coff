import styled from "styled-components";

export const Container = styled.section `
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5.75rem 10rem;

  gap: 56px;

`
export const ContentText = styled.div `
  max-width: 36.75rem;
  height: auto;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: bold;

    margin-bottom: 1rem;
  }

  p {
    font-size: 1.375rem;
    margin-bottom: 4.125rem;
  }
`

export const ContentImg = styled.div `
  max-width: 29.75rem
`