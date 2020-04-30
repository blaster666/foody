import { all, call, put, takeLatest } from "redux-saga/effects";
import { addFoodApi } from "../../util/service";


function* addFood({data}) {
  try {
    yield call(addFoodApi, data);
    yield put({
      type: "ADD_FOOD_SUCCESS",
    });
  } catch (error) {
    yield put({
      type: "ADD_FOOD_ERROR",
      payload: {
        error
      }
    });
  }
}

function* AddSaga() {
  yield all([
    yield takeLatest("ADD_FOOD_REQUEST", addFood)
  ]);
}

export default AddSaga;
