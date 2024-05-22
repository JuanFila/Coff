import { Header } from "../../components/header";
import CoffeeImage from "../../assets/Coffee.svg";
import { Tag } from "../../components/Tags";
import { Container, ContentImg, ContentText } from "./style";
export function Home() {
  return (
    <div>
      <Header />
      <Container>
        <ContentText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div>
            <Tag text="A" />
          </div>
        </ContentText>

        <ContentImg>
          <img src={CoffeeImage} alt="" />
        </ContentImg>
      </Container>
    </div>
  );
}
