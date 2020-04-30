import { all } from "redux-saga/effects";

import { FoodsSaga } from "./module/foodList";
import { OneFoodSaga } from "./module/oneFood";
import { SideCartSaga } from "./module/ui/component";

export default function* rootSaga() {
  yield all([FoodsSaga(), OneFoodSaga(), SideCartSaga()]);
}
