import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../rootSaga";
import { localStore } from "../util/service";

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const store = createStore(
    rootReducer,
    { cart: localStore.getCartLocal() },
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
}

export default configureStore;
