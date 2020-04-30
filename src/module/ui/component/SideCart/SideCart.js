import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import { getCartOpen, getCarts, getCartTotal } from "./selector";
import { deleteCart } from "./action";
import "./SideCart.scss";

const SideCart = () => {
  const dispatch = useDispatch()
  const cartOpen = useSelector(getCartOpen);
  const carts = useSelector(getCarts);
  const cartTotal = useSelector(getCartTotal);

  return (
    <div className={cn("cart-con", { show: cartOpen, hide: !cartOpen })}>
      <h2>IN CART</h2>
      {carts.length ? (
        carts.map(({ name, price, id, amount }) => {
          return (
            <div className="cart-item" key={id}>
              <div>{name}</div>
              <div>{`฿: ${price}`}</div>
              <div>{`amount: ${amount}`}</div>
              <button onClick={()=>dispatch(deleteCart(id,price))}>DELETE</button>
            </div>
          );
        })
      ) : (
        <h4>No Item In Cart</h4>
      )}
      {cartTotal !== 0 && <h3>Total: {cartTotal}</h3>}
    </div>
  );
};

export default SideCart;
