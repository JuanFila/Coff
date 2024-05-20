import { BoxShop, HeaderContainer, Shop,Locale } from "./style";
import  Logo  from "../../assets/Logo.svg"
export function Header() {
  return (
    <HeaderContainer >
      <img src={Logo} alt="logo"/>

      <BoxShop>
        <Locale>Campo Largo, PR</Locale>
        <Shop>C</Shop>
      </BoxShop>
    </HeaderContainer >
  )
}