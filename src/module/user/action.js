export const signInRequest = (user) => ({ type: "SIGN_IN", payload: { user } });

export const signInError = (error) => ({
  type: "SIGN_IN_ERROR",
  payload: { error },
});

export const registerRequest = (user) => ({
  type: "REGISTER",
  payload: { user },
});

export const registerError = (error) => ({
  type: "REGISTER_ERROR",
  payload: { error },
});

// export const signOutRequest = () => {};

export const setUser = ({ user, isLogin }) => ({
  type: "SET_USER",
  payload: { user, isLogin },
});
