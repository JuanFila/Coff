import { Header } from "../../components/header";
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

import Expresso from "../../assets/Type=Expresso.png";
import ExpressoCremoso from "../../assets/Type=Expresso Cremoso.png";
import Americano from "../../assets/Type=Americano.png";
import CoffeeGelado from "../../assets/Type=Café Gelado.png";
import Mocassino from "../../assets/Type=Mochaccino.png";
import ChocolateQuente from "../../assets/Type=Chocolate Quente.png";
import Cubano from "../../assets/Type=Cubano.png";
import Havaiano from "../../assets/Type=Havaiano.png";
import Árabe from "../../assets/Type=Árabe.png";
import Irlandês from "../../assets/Type=Irlandês.png";



export function Home() {

  const coffees = [
    {
      id: 1,
      typeCoffee: ["Tradicional"],
      price: "9,90",
      coffeeName: "Expresso Tradicional",
      coffeeDescription: "O tradicional café feito com água quente e grãos moídos",
      src: Expresso,
      alt: "Expresso Tradicional"
    },
    {
      id: 2,
      typeCoffee: ["Tradicional",],
      price: "9,90",
      coffeeName: "Expresso Americano",
      coffeeDescription: "Expresso diluído, menos intenso que o tradicional",
      src: Americano,
      alt: "Expresso Americano"
    },
    {
      id: 3,
      typeCoffee: ["Tradicional"],
      price: "9,90",
      coffeeName: "Expresso Cremoso",
      coffeeDescription: "Café expresso tradicional com espuma cremosa",
      src: ExpressoCremoso,
      alt: "Expresso Cremoso"
    },
    {
      id: 4,
      typeCoffee: ["Tradicional", "Gelado"],
      price: "9,90",
      coffeeName: "Expresso Gelado",
      coffeeDescription: "Bebida preparada com café expresso e cubos de gelo",
      src: CoffeeGelado,
      alt: "Expresso Gelado"
    },

    {
      id: 5,
      typeCoffee: ["Tradicional", "Com leite"],
      price: "9,90",
      coffeeName: "Mocassino",
      coffeeDescription: "Café expresso com calda de chocolate, pouco leite e espuma",
      src: Mocassino, /* TROCAR A PARTIR DAQUI */
      alt: "Mocassino"
    },
    {
      id: 6,
      typeCoffee: ["Especial", "Com leite"],
      price: "9,90",
      coffeeName: "Chocolate Quente",
      coffeeDescription: "Bebida feita com chocolate dissolvido no leite quente e café",
      src: ChocolateQuente,
      alt: "Chocolate Quente"
    },
    {
      id: 7,
      typeCoffee: ["Especial", "Álcoólico", "Gelado"],
      price: "9,90",
      coffeeName: "Cubano",
      coffeeDescription: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      src: Cubano,
      alt: "Cubano"
    },
    {
      id: 8,
      typeCoffee: ["Especial"],
      price: "9,90",
      coffeeName: "Havaiano",
      coffeeDescription: "Bebida adocicada preparada com café e leite de coco",
      src: Havaiano,
      alt: "Havaiano"
    },
    {
      id: 9,
      typeCoffee: ["Especial"],
      price: "9,90",
      coffeeName: "Árabe",
      coffeeDescription: "Bebida preparada com grãos de café árabe e especiarias",
      src: Árabe,
      alt: "Árabe"
    },
    {
      id: 10,
      typeCoffee: ["Especial",  "Alcoólico"],
      price: "9,90",
      coffeeName: "Irlandês",
      coffeeDescription: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      src: Irlandês,
      alt: "Irlandês"
    },

  ]

  return (
    <Container>
      <Header />
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
