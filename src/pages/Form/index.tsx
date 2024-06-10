import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import { Header } from "../../components/header";
import {
  InputCPF,
  CoffeSelected,
  Container,
  ContainerPayment,
  FormAdress,
  TextCard,
  TitleEndereço,
  InputRua,
  InputNumber,
  InputComplemento,
  InputBairro,
  InputCity,
  InputUF,
  Teste,
  DescriptionEndereço,
  Payment,
  ContainerButton,
  ButtonFinished,
} from "./style";
import { ButtonPayments } from "../../components/ButtonPayment";
import { CoffeeForm } from "../../components/CoffeeForm";
import { TextValueCoffees } from "../../components/TextValueCoffes";

export function Form() {
  return (
    <Container>
      <Header />

      <ContainerPayment>
        <div>
          <TextCard>Complete seu pedido</TextCard>
          <FormAdress>
            <Teste>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <TitleEndereço>Endereço de Entrega</TitleEndereço>

                <DescriptionEndereço>
                  Informe o endereço onde deseja receber seu pedido
                </DescriptionEndereço>
              </div>
            </Teste>

            <div>
              <InputCPF placeholder="CPF" />
              <InputRua placeholder="Rua" />
              <InputNumber placeholder="Número" />
              <InputComplemento placeholder="Complemento" />
              <InputBairro placeholder="Bairro" />
              <InputCity placeholder="Cidade" />
              <InputUF placeholder="UF" />
            </div>
          </FormAdress>
          <Payment>
            <Teste>
              <CurrencyDollar size={22} color="#4B2995" />

              <div>
                <TitleEndereço>Endereço de Entrega</TitleEndereço>

                <DescriptionEndereço>
                  Informe o endereço onde deseja receber seu pedido
                </DescriptionEndereço>
              </div>
            </Teste>
            <ContainerButton>
              <ButtonPayments />
              <ButtonPayments />
              <ButtonPayments />
            </ContainerButton>
          </Payment>
        </div>

        <div>
        <TextCard>Cafés selecionados</TextCard>
        <CoffeSelected>
          <CoffeeForm/>
          <TextValueCoffees color={true} size={true} text="Teste" value="9,99" bold={false}/>
          <TextValueCoffees color={true} size={true} text="Teste" value="9,99" bold={false}/>
          <TextValueCoffees color={false} size={false} text="Teste" value="9,99" bold={true}/>
          <ButtonFinished>Confirmar pedido</ButtonFinished>
        </CoffeSelected>
        </div>
      </ContainerPayment>
    </Container>
  );
}
