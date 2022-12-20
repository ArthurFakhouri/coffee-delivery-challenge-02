import { Address } from "./components/Address";
import { Cart } from "./components/Cart";
import { Payment } from "./components/Payment";
import { CheckoutContainer } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <div>
                <strong>Complete seu pedido</strong>
                <Address />
                <Payment />
            </div>
            <div>
                <strong>Cafés selecionados</strong>
                <Cart />
            </div>
        </CheckoutContainer>
    )
}