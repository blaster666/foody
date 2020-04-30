import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchFoodsApi, deleteFoodApi } from "../../util/service";

function* fetchFoods() {
  try {
    const foods = yield call(fetchFoodsApi);

    yield put({
      type: "FETCH_FOODS_SUCCESS",
      payload: {
        foods: foods.data
      }
    });
  } catch (error) {
    yield put({
      type: "FETCH_FOODS_ERROR",
      payload: {
        error
      }
    });
  }
}

function* deleteFood({ id }) {
  try {
    yield call(deleteFoodApi, id);
    const foods = yield call(fetchFoodsApi);
    yield put({
      type: "DELETE_FOOD_SUCCESS",
      payload: {
        foods: foods.data
      }
    });
  } catch (error) {
    yield put({
      type: "DELETE_FOOD_ERROR",
      payload: {
        error
      }
    });
  }
}

// function* watchFoods() {
//   yield takeLatest("FETCH_FOODS_REQUEST", fetchFoods);
// }

// function* FoodsSaga() {
//   yield all([watchFoods()]);
// }

function* FoodsSaga() {
  yield all([
    yield takeLatest("FETCH_FOODS_REQUEST", fetchFoods),
    yield takeLatest("DELETE_FOOD_REQUEST", deleteFood)
  ]);
}

export default FoodsSaga;
