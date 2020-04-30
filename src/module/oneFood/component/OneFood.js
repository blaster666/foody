import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneFood } from "../action";
import { getFoodData, getLoading } from "../selector";
import Editable from "./EditContent";
import "./OneFood.scss";

const OneFood = () => {
  const { id } = useParams();
  const inputRef = useRef();
  const foodData = useSelector(getFoodData);
  const isLoading = useSelector(getLoading);
  const [food, setFood] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneFood(id));
  }, [dispatch, id]);

  useEffect(() => {
    setFood(foodData);
  }, [foodData]);

  return (
    <>
      {isLoading ? (
        <h1>loading ...</h1>
      ) : (
        <div className="con">
          <div className="card">
            <div className="one-image" />
            <div className="des-con">
              <div className="onefood-title">
                <Editable
                  data={food.name}
                  checkData={foodData.name}
                  type="name"
                  childRef={inputRef}
                  foodId={id}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    name="name"
                    value={food.name}
                    onChange={(e) => setFood({ ...food, name: e.target.value })}
                  />
                </Editable>
              </div>
              <div className="des">
                <Editable
                  data={food.price}
                  checkData={foodData.price}
                  type="price"
                  childRef={inputRef}
                  foodId={id}
                >
                  <input
                    ref={inputRef}
                    type="number"
                    name="price"
                    value={food.price}
                    onChange={(e) =>
                      setFood({ ...food, price: e.target.value })
                    }
                  />
                </Editable>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OneFood;
