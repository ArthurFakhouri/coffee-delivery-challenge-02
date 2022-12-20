import { ActionTypes } from "./actions";

interface Category {
    categoryId: number;
    name: string;
}

export interface CoffeeItem {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    categories: Category[];
    amount: number;
}

interface CartState {
    cart: CoffeeItem[],
}

export function cartReducer(state: CartState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM:
            return {
                cart: [...state.cart, action.payload.newItemCoffee] as CoffeeItem[]
            }
        case ActionTypes.UPDATE_ITEM:
            return {
                cart: state.cart.map((coffeeItem) => {
                    if (coffeeItem.id === action.payload.coffeeItemId)
                        return {
                            ...coffeeItem,
                            amount: action.payload.amount
                        }
                    return coffeeItem;
                }) as CoffeeItem[]
            }
        case ActionTypes.DELETE_ITEM:
            return {
                cart: state.cart.filter((coffeeList) => coffeeList.id != action.payload.coffeeItemId) as CoffeeItem[]
            }
        case ActionTypes.EMPTY_CART:{
            return {
                cart: [] as CoffeeItem[]
            }
        }
        default:
            return state;
    }
}