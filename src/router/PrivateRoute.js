import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Spin } from "antd";
import auth from "../firebase";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state, setState] = useState({ isLogin: false, isLoading: true });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setState({ isLogin: !state.isLogin, isLoading: !state.isLoading });
      } else {
        setState({ ...state, isLoading: !state.isLoading });
      }
    });
  }, []);

  return state.isLoading ? (
    <Spin />
  ) : (
    <Route
      {...rest}
      render={(routeProps) =>
        state.isLogin ? (
          <Component {...routeProps} isLogin={state.isLogin} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
