import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { addNewItem, deleteItem, emptyCart, updateItem } from "../reducers/cart/actions";
import { cartReducer, CoffeeItem } from "../reducers/cart/reducer";

interface Address {
    cep: string;
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
}

interface CartContextType {
    cart: CoffeeItem[];
    address: Address;
    paymentMethod: string;
    addNewCoffee: (coffeeItem: CoffeeItem) => void;
    updateCoffeeItem: (coffeeItemId: number, amount: number) => void;
    deleteCoffeeItem: (coffeeItemId: number) => void;
    emptyCartItems: () => void;
    setPaymentMethodCart: (paymentMethod: string) => void;
    setAddressCart: (address: Address) => void;
}

interface CartContextProvider {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProvider) {

    const [cartState, dispatch] = useReducer(
        cartReducer,
        {
            cart: []
        },
        () => {
            const storedStateAsJson = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

            if (storedStateAsJson)
                return JSON.parse(storedStateAsJson).cart;
            return { cart: [] }
        }
    )
    const { cart } = cartState;
    const [paymentMethod, setPaymentMethod] = useState(() => {
        const storedStateAsJson = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

        if (storedStateAsJson)
            return JSON.parse(storedStateAsJson).paymentMethod as string;
        return '';
    })
    const [address, setAddress] = useState(() => {
        const storedStateAsJson = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

        if (storedStateAsJson)
            return JSON.parse(storedStateAsJson).address as Address;
        return {} as Address;
    })

    useEffect(() => {
        const stateJSON = JSON.stringify({ cart: cartState, paymentMethod, address });

        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
    }, [cartState, address, paymentMethod])

    function addNewCoffee(data: CoffeeItem) {
        const coffeeItemIndex = cart.findIndex((coffeeItem) =>
            coffeeItem.id === data.id
        );

        if (coffeeItemIndex > -1) {
            const totalAmount = cart[coffeeItemIndex].amount + data.amount;

            dispatch(updateItem(data.id, totalAmount));
        } else {
            dispatch(addNewItem(data))
        }
    }

    function updateCoffeeItem(coffeeItemId: number, amount: number) {
        dispatch(updateItem(coffeeItemId, amount));
    }

    function deleteCoffeeItem(coffeeItemId: number) {
        dispatch(deleteItem(coffeeItemId));
    }

    function emptyCartItems() {
        dispatch(emptyCart())
    }

    function setPaymentMethodCart(formaPagamento: string) {
        setPaymentMethod(formaPagamento);
    }

    function setAddressCart(endereco: Address) {
        setAddress(endereco);
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                paymentMethod,
                address,
                addNewCoffee,
                updateCoffeeItem,
                deleteCoffeeItem,
                emptyCartItems,
                setPaymentMethodCart,
                setAddressCart
            }}>
            {children}
        </CartContext.Provider>
    )
}