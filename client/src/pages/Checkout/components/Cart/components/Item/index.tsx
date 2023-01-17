import { Trash } from "phosphor-react";
import { ButtonHTMLAttributes, useContext, useState } from "react";
import { Counter } from "../../../../../../components/Counter";
import { CartContext } from "../../../../../../contexts/CartContext";
import { Coffee, Data, Delete, ItemContainer } from "./styles";

interface ItemCoffeeProps {
    id: number;
    image: string;
    title: string;
    price: string;
    amount: number;
}

export function Item({ id, image, title, price, amount }: ItemCoffeeProps) {

    const { updateCoffeeItem, deleteCoffeeItem } = useContext(CartContext);
    const [activeDelete, setActiveDelete] = useState(false);

    function updateCountCoffeeItem(amount: number, coffeeItemId: number | undefined) {
        if (coffeeItemId)
            updateCoffeeItem(coffeeItemId, amount);
    }

    function handleDeleteCoffeeItem(coffeeItemId: number) {
        if (activeDelete) {
            deleteCoffeeItem(coffeeItemId);
        } else {
            setActiveDelete(true);
        }
    }

    function handleDisableActiveDelete() {
        if (activeDelete) {
            setActiveDelete(false);
        }
    }

    return (
        <ItemContainer>
            <Coffee>
                <img src={image} alt={`"${title}" cup`} />
                <Data>
                    <div>
                        <label htmlFor={`quantity${id}`}>{title}</label>
                        <span>R$ {price}</span>
                    </div>
                    <div>
                        <Counter count={amount} id={id} updateCountValue={updateCountCoffeeItem} />
                        <Delete
                            activeDelete={activeDelete}
                            onMouseLeave={handleDisableActiveDelete}
                            onClick={() => handleDeleteCoffeeItem(id)}
                        ><Trash size={16} />Remover</Delete>
                    </div>
                </Data>
            </Coffee>
        </ItemContainer>
    )
}