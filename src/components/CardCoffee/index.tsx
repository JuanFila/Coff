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
  Adefinir2,
} from "./style";
import { TypeCoffee } from "../TypeCoffe";

interface Image {
  src: string;
  alt: string;
}

interface PropsCoffee {
  typeCoffee: string[];
  price: string;
  coffeeName: string;
  coffeeDescription: string;
  img: Image;
}

export function CardCoffee({
  price,
  img,
  coffeeDescription,
  coffeeName,
}: PropsCoffee) {
  return (
    <CardContainerCoffee>
      <ImageCoffee src={img.src} alt={img.alt} />
      <TypeCoffee />
      <CoffeName>{coffeeName}</CoffeName>
      <CoffeDescription>{coffeeDescription}</CoffeDescription>
      <ContainerPrice>
        <p>
          <Moeda>R$ </Moeda>
          <Price> {price}</Price>
        </p>

        <Adefinir2>
          <Input type="number" placeholder="0" />
          <ButtonShop>
            <ShoppingCartSimple size={18} color="#FFF" weight="fill" />
          </ButtonShop>
        </Adefinir2>

      </ContainerPrice>
    </CardContainerCoffee>
  );
}
