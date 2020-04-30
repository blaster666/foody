import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { patchFood } from "../action";
import "./EditContent.scss";

const EditContent = ({ data, children, childRef, foodId, checkData, type }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = (event) => {
    const { key } = event;
    const keys = ["Escape", "Tab", "Enter"];
    if (keys.some((k) => k === key) && data !== checkData) {
      dispatch(
        patchFood(foodId, childRef.current.value, childRef.current.name)
      );
      setEditing(false);
    }
  };

  const handleOnBlur = () => {
    if (data !== checkData) {
      dispatch(
        patchFood(foodId, childRef.current.value, childRef.current.name)
      );
    }
    setEditing(false);
  };

  useEffect(() => {
    if (childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  return (
    <div>
      {isEditing ? (
        <div onBlur={handleOnBlur} onKeyDown={(e) => handleKeyDown(e)}>
          {children}
        </div>
      ) : (
        <div onClick={() => setEditing(true)}>
          {type === "name" ? (
            <h2 className="cur">{data}</h2>
          ) : (
            <h3 className="cur">{`ราคา: ${data} ฿`}</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default EditContent;
