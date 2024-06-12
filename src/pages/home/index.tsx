import CoffeeImage from "../../assets/Coffee.svg";
import { Tag } from "../../components/Tags";
import {
  GridTeste,
  Container,
  ContainerSection,
  ContentImg,
  ContentText,
  GridContainer,
  Section,
  Text,
  Title,
} from "./style";
import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from "@phosphor-icons/react";
import { CardCoffee } from "../../components/CardCoffee";

import {coffees} from "../../../data.json";




export function Home() {

  return (
    <Container>
      <ContainerSection>
        <ContentText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <Text>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Text>
          <GridContainer>
            <Tag
              text="Compra simples e segura"
              icon={ShoppingCartSimple}
              ContainerColor="#C47F17"
            />
            <Tag
              text="Entrega rápida e rastreada"
              icon={Package}
              ContainerColor="#403937"
            />
            <Tag
              text="O café chega fresquinho até você"
              icon={Timer}
              ContainerColor="#DBAC2C"
            />
            <Tag
              text="Embalagem mantém o café intacto"
              icon={Coffee}
              ContainerColor="#4B2995"
            />
          </GridContainer>
        </ContentText>

        <ContentImg>
          <img src={CoffeeImage} alt="" />
        </ContentImg>
      </ContainerSection>

      <Section>
        <Title>Nossos Cafés</Title>
        <GridTeste>
          {
            coffees.map((coffee) => (
              <CardCoffee
                key={coffee.id}
                typeCoffee={coffee.typeCoffee}
                price={coffee.price}
                coffeeName={coffee.coffeeName}
                coffeeDescription={coffee.coffeeDescription}
                src={coffee.src}
                alt={coffee.alt}
              />
            ))
          }
        </GridTeste>
      </Section>
    </Container>
  );
}
