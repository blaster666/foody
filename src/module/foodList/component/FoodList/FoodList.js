import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodsRequest, deleteFoodRequest } from "../../action";
import { addToCart } from "../../../ui/component/SideCart/action";
import { getFoodsData, getLoading } from "../../selector";
import FoodCard from "./FoodCard";
import { Row, Col, Spin } from "antd";
import "./FoodList.scss";

const FoodList = () => {
  const dispatch = useDispatch();
  const foodsData = useSelector(getFoodsData);
  const isLoading = useSelector(getLoading);
  const deleteDispatch = (id) => dispatch(deleteFoodRequest(id));
  const addToCartDispatch = (data) => dispatch(addToCart(data));

  useEffect(() => {
    dispatch(fetchFoodsRequest());
  }, [dispatch]);

  return (
    <div className="f-con">
      {isLoading ? (
        <Row type="flex" justify="center">
          <div className="m-load">
            <Spin size="large" />
          </div>
        </Row>
      ) : (
        <Row type="flex" justify="center">
          {foodsData.map(({ id, data: { name, price, balance } }) => {
            return (
              <Col xs={24} sm={12} lg={8} xl={6} key={id}>
                <FoodCard
                  id={id}
                  name={name}
                  price={price}
                  balance={balance}
                  deleteDispatch={deleteDispatch}
                  addToCart={addToCartDispatch}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default FoodList;
