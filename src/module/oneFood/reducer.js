const initState = {
  isLoading: false,
  error: null,
  oneFood: {}
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case "FETCH_ONE_FOOD_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_ONE_FOOD_SUCCESS":
      return {
        ...state,
        oneFood: payload.food,
        isLoading: false
      };
    case "FETCH_ONE_FOOD_ERROR":
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
    case "PATCH_FOOD_REQUEST":
      return {
        ...state,
        // isLoading: true
      };
    case "PATCH_FOOD_SUCCESS":
      return {
        ...state,
        oneFood: payload.food,
        isLoading: false
      };
    case "PATCH_FOOD_ERROR":
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
    default:
      return state;
  }
};
