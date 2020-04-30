import { createSelector } from "reselect";

const isCartOpen = (state) => state.cart.cartOpen;
const carts = (state) => state.cart.cart;
const total = (state) => state.cart.cartTotal;
const cartItems = (state) => state.cart.cartItems;

export const getCarts = createSelector(carts, (cart) => cart);
export const getCartOpen = createSelector(isCartOpen, (cartOpen) => cartOpen);
export const getCartTotal = createSelector(total, (t) => t);
export const getCartItems = createSelector(cartItems, (c) => c);
