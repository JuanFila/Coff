import { Container, Text } from "./style";

interface PropsText {
  text: string;
  value: string;
  bold: boolean;
  size: boolean;
  color: boolean;
}

export function TextValueCoffees({text, value, bold,size, color}: PropsText) {
  return(
    <Container>
      <Text color={color} size={size} bold={bold}> {text}</Text>
      <Text color={color} size={size} bold={bold}>{value}</Text>
    </Container>
  )
}