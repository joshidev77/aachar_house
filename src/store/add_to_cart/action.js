import { CART, UPDATE, DELETE, ADD } from "./actionType";

export const cart=(products)=>({
    type: CART,
    payload:{products},
});

export const update=(products)=>({
    type: UPDATE,
    payload:{products},
});

export const remove=(products)=>({
    type: DELETE,
    payload:{products},
});

export const add=(products)=>({
    type: ADD,
    payload:{products},
});