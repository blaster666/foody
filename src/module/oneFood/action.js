export const fetchOneFood = id => ({
  type: "FETCH_ONE_FOOD_REQUEST",
  id
});

export const patchFood = (id, data, key) => ({
  type: "PATCH_FOOD_REQUEST",
  id,
  data,
  key
});
