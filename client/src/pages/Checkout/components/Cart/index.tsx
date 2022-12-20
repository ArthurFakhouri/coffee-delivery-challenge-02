import { CartContainer, Divider, Items } from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import { Price } from "./components/Price";
import { Item } from "./components/Item";
import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export function Cart() {

    const navigate = useNavigate();
    const { cart, address, paymentMethod, emptyCartItems } = useContext(CartContext);

    const isSubmitDisabled = !(cart.length && address && paymentMethod)

    function handlePlaceOrder() {
        if (!isSubmitDisabled) {
            navigate("/success");
            emptyCartItems();
        }
    }

    return (
        <CartContainer>
            <Items>
                {cart.map((item) =>
                    <React.Fragment key={item.id}>
                        <Item id={item.id} image={item.image} title={item.title} price={item.price} amount={item.amount} />
                        <Divider />
                    </React.Fragment>
                )}
            </Items>
            <Price />
            <button disabled={isSubmitDisabled} onClick={handlePlaceOrder}>
                Confirmar Pedido
            </button>
        </CartContainer>
    )
}