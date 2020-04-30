import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  NotFoundPage,
  FoodsPage,
  AddFoodPage,
  RegisterPage,
  OneFoodPage,
  SignInPage,
} from "../pages";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/register" component={RegisterPage} exact />
        <PublicRoute path="/signin" component={SignInPage} exact />
        <PrivateRoute path="/foods" component={FoodsPage} exact />
        <PrivateRoute path="/foods/:id" component={OneFoodPage} exact />
        <PrivateRoute path="/addfood" component={AddFoodPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
