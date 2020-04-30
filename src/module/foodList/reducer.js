const initState = {
  isLoading: false,
  error: null,
  foods: [],
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case "FETCH_FOODS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_FOODS_SUCCESS":
      return {
        ...state,
        foods: payload.foods,
        isLoading: false,
      };
    case "FETCH_FOODS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case "DELETE_FOOD_ERROR":
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case "DELETE_FOOD_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_FOOD_SUCCESS":
      return {
        ...state,
        foods: payload.foods,
        isLoading: false,
      };
    default:
      return state;
  }
};
