import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "antd";
import "./FoodCard.scss";

const { Meta } = Card;

const DesInCard = ({ price, balance }) => (
  <div>
    <div className="text">{`ราคา : ${price} ฿`}</div>
  </div>
);
const TitleCard = ({ name, balance }) => (
  <div className="title">{`${name}`}</div>
);

const FoodCard = ({ name, price, balance, id, deleteDispatch, addToCart }) => {
  const history = useHistory();
  const onClickCallBack = useCallback(
    (id) => {
      history.push(`/foods/${id}`);
    },
    [id]
  );

  return (
    <Card
      style={{ width: 300, margin: "auto", marginTop: 20 }}
      cover={
        <img
          className="cursor"
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          onClick={() => onClickCallBack(id)}
        />
      }
      actions={[
        <Button onClick={() => addToCart({ id, name, price })}>Add</Button>,
        <Button onClick={() => deleteDispatch(id)}>Delete</Button>,
      ]}
    >
      <Meta
        className="cursor"
        title={<TitleCard name={name} />}
        description={<DesInCard price={price} balance={balance} />}
        onClick={() => onClickCallBack(id)}
      />
    </Card>
  );
};

export default FoodCard;
