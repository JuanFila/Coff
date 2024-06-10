import { Header } from "../../components/header";
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
import { MapPin } from "@phosphor-icons/react";

export function Finish() {
  //usar contexto
  return (
    <Container>
      <Header />

      <Body>
        <Info>
          <h2>Uhu! Pedido confirmado</h2>
          <Text>Agora é só aguardar que logo o café chegará até você</Text>
          <InformationBox>
            <div>
              <Icon>
                <MapPin size={16} color="#FFF" weight="fill" />
              </Icon>
              <div>
                <p>Entrega em Rua João Daniel Martinelli, 102</p>
                <p>Farrapos - Porto Alegre, RS</p>
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
