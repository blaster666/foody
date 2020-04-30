import { all, put, takeEvery, select } from "redux-saga/effects";
import { getCarts, getCartItems, getCartTotal } from "./selector";
import { localStore } from "../../../../util/service";

function* addToCart({ data: { id, name, price } }) {
  const carts = yield select(getCarts);
  const oldCartItem = yield select(getCartItems);
  const oldCartTotal = yield select(getCartTotal);
  let hasNewCart = false;
  const newCarts = carts.map((c) => {
    if (c.id === id) {
      const amount = c.amount + 1;
      const total = amount * c.price;
      hasNewCart = true;
      return { ...c, amount, total };
    } else return c;
  });

  if (!hasNewCart) {
    const data = {
      cart: [...carts, { id, name, price, amount: 1, total: price }],
      cartItems: oldCartItem + 1,
      cartTotal: oldCartTotal + price,
    };
    localStore.setCartLocal({ ...data });
    yield put({
      type: "ADD_CART_SUCCESS",
      payload: { ...data },
    });
  } else {
    const data = {
      cart: newCarts,
      cartItems: oldCartItem + 1,
      cartTotal: oldCartTotal + price,
    };
    localStore.setCartLocal({ ...data });
    yield put({
      type: "ADD_CART_SUCCESS",
      payload: { ...data },
    });
  }
}

function* deleteCart({ id, price }) {
  const carts = yield select(getCarts);
  const oldCartItem = yield select(getCartItems);
  const oldCartTotal = yield select(getCartTotal);

  const newCarts = carts
    .map((c) =>
      c.id === id ? { ...c, amount: c.amount - 1, total: c.total - c.price } : c
    )
    .filter((c) => c.amount > 0);

  const data = {
    cart: [...newCarts],
    cartItems: oldCartItem - 1,
    cartTotal: oldCartTotal - price,
  };
  localStore.setCartLocal({ ...data });
  yield put({
    type: "DELETE_CART_SUCCESS",
    payload: { ...data },
  });
}

function* SideCartSaga() {
  yield all([
    yield takeEvery("ADD_CART_SAGA", addToCart),
    yield takeEvery("DELETE_CART_SAGA", deleteCart),
  ]);
}

export default SideCartSaga;
