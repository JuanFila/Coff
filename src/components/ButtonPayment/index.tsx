import { Button } from "./style.ts";
import { CurrencyDollar } from "@phosphor-icons/react";

export function ButtonPayments() {
  return (
    <Button>
      <CurrencyDollar size={16} color="#4B2995" />
      CARTÃO DE CREDITO
    </Button>
  );
}
