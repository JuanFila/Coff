import {
  Container,
  ContainerImage,
  Info,
  InformationBox,
  Body,
  Text,
  Icon,
} from "./style";

import ImageFinish from "../../../public/image/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export function Finish() {
  //usar contexto
  return (
    <Container>
      <Body>
        <Info>
          <h2>Uhu! Pedido confirmado</h2>
          <Text>Agora é só aguardar que logo o café chegará até você</Text>
          <InformationBox>
            <div>
              <Icon BoxColor="purple-dark">
                <MapPin size={16} color="#FFF" weight="fill" />
              </Icon>
              <div>
                
                <p>Entrega em <b>Rua João Daniel Martinelli, 102</b></p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div>
              <Icon BoxColor="yellow">
                <Timer size={16} color="#FFF" weight="fill" />
              </Icon>
              <div>
                <p>Previsão de entrega</p>
                <p><b>20 min - 30 min </b></p>
              </div>
            </div>
            <div>
              <Icon BoxColor="yellow-dark">
                <CurrencyDollar size={16} color="#FFF"  />
              </Icon>
              <div>
                
                <p>Pagamento na entrega</p>
                <p><b>Cartão de Crédito</b></p>
              </div>
            </div>
          </InformationBox>
        </Info>

        <ContainerImage>
          <img src={ImageFinish} />
        </ContainerImage>
      </Body>
    </Container>
  );
}
