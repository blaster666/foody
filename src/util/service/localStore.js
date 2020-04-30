export const getCartLocal = () => {
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  return (
    cart || {
      cartOpen: false,
      cart: [],
      cartItems: 0,
      cartTotal: 0,
    }
  );
};

export const setCartLocal = (data) => {
  window.localStorage.setItem("cart", JSON.stringify(data));
};
