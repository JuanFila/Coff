import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`
export const ContainerPayment = styled.div`  //form aq
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 36px;
`
export const FormAdress = styled.form` //div aq
  width: 41rem;
  height: 23.25rem;
  background: ${props => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2rem 2.5rem 2.5rem 2.5rem;  
`
export const TextCard = styled.p`
  font-size: 1.125rem;
  font-family: "Baloo 2";
  font-weight: bold;
  color: ${props => props.theme["base-subtitle"]};
  margin-bottom: 1rem;
`
export const CoffeSelected = styled.div`
  width: 28rem;
  height: 31.125rem;
  background: ${props => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2.5rem;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
`
export const Teste = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 1rem;
  margin-bottom: 2rem;
  >div{
    display: flex;
    flex-direction: column;
  }
`
export const TitleEndereço = styled.p`
  color: ${props => props.theme["base-title"]};
  font-size: 1rem;
  font-weight: 600;
  
  font-family: "Baloo 2";
`

export const DescriptionEndereço = styled.p`
  color: ${props => props.theme["base-text"]};
  font-size: 0.875rem;
  font-family: "Baloo 2";
`



const InputComponent = styled.input`
  background: ${props => props.theme["base-input"]};
  border: 1.5px solid ${props => props.theme["base-button"]};
  padding: 12px;
  color: ${props => props.theme["base-text"]};
  border-radius: 4px;
  margin-bottom: 1rem;
  margin-left: 12px;
`

export const InputCPF = styled(InputComponent)`
  width: 12.5rem;
  height: 2.625rem;
`
export const InputRua = styled(InputComponent)`
  width: 35rem;
  height: 2.625rem;
`
export const InputNumber = styled(InputComponent)`
   width: 12.5rem;
   height: 2.625rem;
`
export const InputComplemento = styled(InputComponent)`
  width: 21.75rem;
  height: 2.625rem;
`
export const InputBairro = styled(InputComponent)`
   width: 12.5rem;
   height: 2.625rem;
`
export const InputCity = styled(InputComponent)`
  width: 17.25rem;
  height: 2.625rem;
`
export const InputUF = styled(InputComponent)`
  width: 3.75rem;
  height: 2.625rem;
`


export const Payment = styled.div`
  width: 41rem;
  height: 12.9375rem;
  background: ${props => props.theme["base-card"]};
  margin-top: 12px;
  padding: 2.5rem;

`
export const ContainerButton = styled.div`

    display: flex;
    align-items: center;
    justify-content:center;
    gap: 12px;

`
