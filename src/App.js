import React from "react";
import { Provider } from "react-redux";

import AppRouter from "./router";
import SideCart from './module/ui/component/SideCart'
import configureStore from "./store";
import "./App.scss";

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
          <SideCart/>
          <AppRouter />
      </Provider>
    </>
  );
}

export default App;
