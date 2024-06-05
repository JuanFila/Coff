import { TypeCoffeeText } from "./style";
interface TypeCoffee {
  typeCoffee: string;
}
export function TypeCoffee({ typeCoffee }: TypeCoffee) {
  return <TypeCoffeeText>{typeCoffee}</TypeCoffeeText>;
}
