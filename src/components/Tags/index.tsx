import { Container } from "./style";

interface TagProps {
  text: string;
}

export function Tag({text}: TagProps) {
  return (
    <Container>
      <div>C</div>
      <p>{text}</p>
    </Container>
  )
}