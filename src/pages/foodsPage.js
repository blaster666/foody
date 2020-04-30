import React from "react";
import { Header } from "../module/ui/component";
import { FoodList } from "../module/foodList";
import "./page.scss";

const FoodsPage = () => {
  return (
    <div>
      <Header />
      <FoodList />
    </div>
  );
};

export default FoodsPage;
