import React from "react";
import { Menu } from "antd";
import auth from "../../../../firebase";

const UserMenu = (props) => {
  const handleClick = async ({ key }) => {
    if (key === "2") {
      try {
        await auth.signOut();
        props.push("/signin");
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const { email } = auth.currentUser;
  return (
    <Menu onClick={handleClick}>
      <Menu.Item key="2">Sign Out</Menu.Item>
    </Menu>
  );
};

export default UserMenu;
