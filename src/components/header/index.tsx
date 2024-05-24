import { BoxShop, HeaderContainer, Shop,Locale } from "./style";
import  Logo  from "../../assets/Logo.svg"
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
export function Header() {
  return (
    <HeaderContainer >
      <img src={Logo} alt="logo"/>

      <BoxShop>
        <Locale> <MapPin size={16} color="#4B2995" weight="fill"/> Campo Largo, PR</Locale>
        <Shop><ShoppingCartSimple size={18} color="#C47F17" weight="fill" /></Shop>
      </BoxShop>
    </HeaderContainer >
  )
}