import { ShoppingCartSimple } from "@phosphor-icons/react";
import {
  ButtonShop,
  CardContainerCoffee,
  ContainerPrice,
  ImageCoffee,
  Input,
  Price,
  Moeda,
  CoffeName,
  CoffeDescription,
  ContainerShop,
  TypeCoffeContainer,
  Description,
} from "./style";
import { TypeCoffee } from "../TypeCoffe";

interface PropsCoffee {
  typeCoffee: string[];
  price: string;
  coffeeName: string;
  coffeeDescription: string;
  src: string;
  alt: string;
}

export function CardCoffee({
  typeCoffee,
  price,
  src,
  alt,
  coffeeDescription,
  coffeeName,
}: PropsCoffee) {
  return (
    <CardContainerCoffee>
      <ImageCoffee src={src} alt={alt} />

      <TypeCoffeContainer>
        {typeCoffee.map((type, index) => (
          <TypeCoffee key={index} typeCoffee={type} />
        ))}
      </TypeCoffeContainer>

      <Description>
        <CoffeName>{coffeeName}</CoffeName>
        <CoffeDescription>{coffeeDescription}</CoffeDescription>
      </Description>

      <ContainerPrice>
        <p>
          <Moeda>R$ </Moeda>
          <Price> {price}</Price>
        </p>
        <ContainerShop>
          <Input type="number" placeholder="0" />
          <ButtonShop>
            <ShoppingCartSimple size={18} color="#FFF" weight="fill" />
          </ButtonShop>
        </ContainerShop>
      </ContainerPrice>
    </CardContainerCoffee>
  );
}
