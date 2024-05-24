import { IconProps } from "@phosphor-icons/react";
import { Container, ContainerIconColor } from "./style";


interface TagProps {
  text: string;
  icon: React.ComponentType<IconProps>;
  ContainerColor?: string;
}

export function Tag({text, icon: Icon, ContainerColor}: TagProps) {
  return (
    <Container>
      <ContainerIconColor color={ContainerColor}>
        <Icon size={16} color="#FFF" weight="fill" />
      </ContainerIconColor>
      <p>{text}</p>
    </Container>
  )
}