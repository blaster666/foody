export const fetchFoodsRequest = () => ({
  type: "FETCH_FOODS_REQUEST"
});

export const deleteFoodRequest = id => ({
  type: "DELETE_FOOD_REQUEST",
  id
});
