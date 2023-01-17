import { Address } from "./components/Address";
import { Cart } from "./components/Cart";
import { Payment } from "./components/Payment";
import { CheckoutContainer } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <section>
                <h4>Complete seu pedido</h4>
                <Address />
                <Payment />
            </section>
            <section>
                <h4>Cafés selecionados</h4>
                <Cart />
            </section>
        </CheckoutContainer>
    )
}