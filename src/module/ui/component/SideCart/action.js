export const handleCart = cartOpen => ({ type: "HANDLE_CART" });

export const addToCart = data => {
  // console.log(data)
  return { type: "ADD_CART_SAGA", data };
};

export const deleteCart = (id, price) => ({
  type: "DELETE_CART_SAGA",
  id,
  price
});
