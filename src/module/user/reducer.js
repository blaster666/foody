const initState = {
  error: null,
  isLogin: null,
  data: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case "SIGN_IN":
      return {
        ...state,
        data: payload.user,
        isLogin: true,
      };
    case "SIGN_IN_ERROR":
      return {
        ...state,
        error: payload.error,
      };
    case "REGISTER":
      return {
        ...state,
        data: payload.user,
        isLogin: true,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        error: payload.error,
      };
    case "SET_USER":
      return {
        ...state,
        isLogin: payload.isLogin,
        data: payload.user,
      };
    default:
      return state;
  }
};
