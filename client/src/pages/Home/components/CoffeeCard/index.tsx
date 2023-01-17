import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { Counter } from "../../../../components/Counter";
import { CartContext } from "../../../../contexts/CartContext";
import { Actions, Buy, Categories, CoffeeCardContainer } from "./styles";

interface Category {
    categoryId: number;
    name: string;
}

interface CoffeeCardProps {
    id: number;
    image: string;
    title: string;
    description: string;
    categories: Category[];
    price: string;
}

export function CoffeeCard(coffee: CoffeeCardProps) {

    const { addNewCoffee } = useContext(CartContext);
    const [count, setCount] = useState(1);

    function updateCountValue(newCountValue: number) {
        setCount(newCountValue);
    }

    function handleAddToCart(coffeeItem: CoffeeCardProps, amount: number) {
        const newCoffeeItem = {
            ...coffeeItem, amount
        }
        addNewCoffee(newCoffeeItem);
    }

    return (
        <CoffeeCardContainer>
            <img src={coffee.image} alt={`"${coffee.title}" cup`} />
            <Categories>
                {coffee.categories.map((category, index) =>
                    <li key={category.name + index}>{category.name}</li>
                )}
            </Categories>
            <label htmlFor={`quantity${coffee.id}`}>{coffee.title}</label>
            <p>{coffee.description}</p>
            <Buy>
                <span>R$ <span>{coffee.price}</span></span>
                <Actions>
                    <Counter id={coffee.id} count={count} updateCountValue={updateCountValue} />
                    <button aria-label="Add To Cart" onClick={() => handleAddToCart(coffee, count)}><ShoppingCart size={22} weight="fill" /></button>
                </Actions>
            </Buy>
        </CoffeeCardContainer>
    )
}