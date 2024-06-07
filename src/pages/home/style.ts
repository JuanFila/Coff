import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`
export const ContainerSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.75rem 10rem;
  gap: 56px;
`
export const ContentText = styled.div`
  max-width: 36.75rem;
  height: auto;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: bold;

    margin-bottom: 1rem;
  }
`
export const Text = styled.p`
    font-size: 1.375rem;
    margin-bottom: 4.125rem;
`
export const ContentImg = styled.div`
  max-width: 29.75rem;
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`
export const Title = styled.h2`
 font-family: "Baloo 2";
 font-size: 2.3rem;
`
export const Section = styled.section`
  width: 100%;
  height: auto;
 padding: 2rem 10rem ;   
`
export const GridTeste = styled.div`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      
`

