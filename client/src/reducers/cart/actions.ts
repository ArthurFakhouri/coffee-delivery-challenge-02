import { CoffeeItem } from "./reducer";

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
    UPDATE_ITEM = 'UPDATE_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    EMPTY_CART = 'EMPTY_CART',
}

export function addNewItem(newItemCoffee: CoffeeItem) {
    return { type: ActionTypes.ADD_NEW_ITEM, payload: { newItemCoffee } }
}

export function updateItem(coffeeItemId: number, amount: number) {
    return { type: ActionTypes.UPDATE_ITEM, payload: { coffeeItemId, amount } }
}

export function deleteItem(coffeeItemId: number) {
    return { type: ActionTypes.DELETE_ITEM, payload: { coffeeItemId } }
}

export function emptyCart() {
    return { type: ActionTypes.EMPTY_CART }
}