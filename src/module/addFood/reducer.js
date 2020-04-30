const initState = {
  isLoading: false,
  error: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case "ADD_FOOD_ERROR":
      return {
        ...state,
        error: payload.error
      };
    // case "ADD_FOOD_REQUEST":
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    case "ADD_FOOD_SUCCESS":
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
