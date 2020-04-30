// item in cart [{ id, name, price:number, amount:number, total:number }]
const initState = {
  cartOpen: false,
  cart: [],
  cartItems: 0,
  cartTotal: 0
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case "HANDLE_CART":
      return { ...state, cartOpen: !state.cartOpen };
    case "ADD_CART_SUCCESS":
      return {
        ...state,
        cart: [...payload.cart],
        cartItems: payload.cartItems,
        cartTotal: payload.cartTotal
      };
    case 'DELETE_CART_SUCCESS':
      return {
        ...state,
        cart: [...payload.cart],
        cartItems: payload.cartItems,
        cartTotal: payload.cartTotal
      }
    default:
      return state;
  }
};
