import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Badge, Avatar, Dropdown } from "antd";
import { handleCart } from "../SideCart/action";
import { getCartItems } from "../SideCart/selector";
import auth from "../../../../firebase";
import UserMenu from "./UserMenu";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const count = useSelector(getCartItems);
  const isLogin = !!auth.currentUser;

  return (
    <nav>
      <ul className="container">
        <div className="container con-list">
          <li className="item">
            <NavLink exact to="/foods">
              <Button type="primary" ghost>
                Food List
              </Button>
            </NavLink>
          </li>
          <li className="item">
            <NavLink exact to="/addfood">
              <Button type="primary" ghost>
                Add Food
              </Button>
            </NavLink>
          </li>
          {isLogin && (
            <li className="item">
              <Badge count={count}>
                <Button
                  shape="circle"
                  icon="shopping-cart"
                  type="primary"
                  ghost
                  onClick={() => dispatch(handleCart())}
                />
              </Badge>
            </li>
          )}
          {!isLogin && (
            <li className="item">
              <NavLink exact to="/signin">
                <Button type="link">Sign In</Button>
              </NavLink>
            </li>
          )}
          {!isLogin && (
            <li className="item">
              <NavLink exact to="/register">
                <Button type="link">Sign Up</Button>
              </NavLink>
            </li>
          )}
          {isLogin && (
            <li className="item">
              <Dropdown overlay={UserMenu(history)}>
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    cursor: "pointer",
                  }}
                >
                  USER
                </Avatar>
              </Dropdown>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Header;
