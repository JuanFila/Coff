import { ShoppingCartSimple } from "@phosphor-icons/react"
import { ButtonShop, CardContainerCoffee, ImageCoffee, Input, Price } from "./style";

interface Image {
  src: string;
  alt: string;
}

interface PropsCoffee {
  price: string;
  coffeeName: string;
  coffeeDescription: string;
  img: Image;
}

export function CardCoffee({price, img, coffeeDescription, coffeeName}: PropsCoffee) {
 return (
  <CardContainerCoffee>
    <ImageCoffee src={img.src} alt={img.alt} />
    {/* component */}
    <h2>{coffeeName}</h2>
    <p>{coffeeDescription}</p>
    <div>
      <p>R$ </p>
      <Price> {price}</Price>
      <Input type="number"/>
      <ButtonShop><ShoppingCartSimple size={18} color="#FFF" weight="fill" /></ButtonShop>
    </div>
  </CardContainerCoffee>
 )
}