import { useContext } from "react";
import { CartContext } from "../../../../../../contexts/CartContext";
import { PriceContainer, SubTitle, Title } from "./styles";

export function Price() {

    const { cart } = useContext(CartContext);

    const sumItemsPrice = cart.reduce((prvValue, curValue) => {
        const price = Number(curValue.price.replace(',', '.'));
        const multiplication = price * curValue.amount;

        return prvValue + multiplication;
    }, 0);

    const totalItems = String(sumItemsPrice.toFixed(2)).replace('.', ',');
    const deliveryPrice = 3.5;

    const totalToPay = String((sumItemsPrice + deliveryPrice).toFixed(2)).replace('.', ',');

    return (
        <PriceContainer>
            <SubTitle>
                <span>Total de itens</span>
                <span>R$ {totalItems}</span>
            </SubTitle>
            <SubTitle>
                <span>Entrega</span>
                <span>R$ 3,50</span>
            </SubTitle>
            <Title>
                <h3>Total</h3>
                <h3>R$ {totalToPay}</h3>
            </Title>
        </PriceContainer>
    )
}