import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { PaymentContainer, PaymentMethods } from "./styles";

export function Payment() {

    const { setPaymentMethodCart, paymentMethod } = useContext(CartContext);

    enum RadioTypes {
        CARTAO_DE_CREDITO = "Cartão de Crédito",
        CARTAO_DE_DEBITO = "Cartão de Débito",
        DINHEIRO = "Dinheiro",
    }

    function handleChangePaymentMethod(event: ChangeEvent<HTMLInputElement>) {
        setPaymentMethodCart(event.target.value);
    }

    return (
        <PaymentContainer>
            <div>
                <span><CurrencyDollar size={22} />Pagamento</span>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
            <PaymentMethods>
                <label>
                    <CreditCard size={16} />Cartão de Crédito
                    <input
                        type="radio"
                        value="Cartão de Crédito"
                        name="paymentMethod"
                        checked={paymentMethod === RadioTypes.CARTAO_DE_CREDITO}
                        onChange={handleChangePaymentMethod} />
                </label>
                <label>
                    <Bank size={16} />Cartão de Débito
                    <input
                        type="radio"
                        value="Cartão de Débito"
                        name="paymentMethod"
                        checked={paymentMethod === RadioTypes.CARTAO_DE_DEBITO}
                        onChange={handleChangePaymentMethod} />
                </label>
                <label>
                    <Money size={16} />Dinheiro
                    <input
                        type="radio"
                        value="Dinheiro"
                        name="paymentMethod"
                        checked={paymentMethod === RadioTypes.DINHEIRO}
                        onChange={handleChangePaymentMethod} />
                </label>
            </PaymentMethods>
        </PaymentContainer>
    )
}