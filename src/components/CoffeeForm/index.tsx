import { Trash } from "@phosphor-icons/react";
import { Value, Buttons, Card, ImageCoffee, Infos, Input, Coffee, Button} from "./style";

export function CoffeeForm() {
  return (
    <Card>
      <ImageCoffee src="/public/image/Americano.png" alt="ImagemDoCafé" />
      <div>
        <Infos>
          <Coffee>Expresso Tradicional</Coffee>
          <Value>R$ 9,90</Value>
        </Infos>
        <Buttons>
          <Input type="number" />
          <Button><Trash size={16} color="#4B2995"/> REMOVER</Button>
        </Buttons>
      </div>
    </Card>
  );
}
