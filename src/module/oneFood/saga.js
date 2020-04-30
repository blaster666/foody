import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchOneFoodApi, patchFoodApi } from "../../util/service";

function* fetchOneFood({id}) {
  try {
    const food = yield call(fetchOneFoodApi, id);

    yield put({
      type: "FETCH_ONE_FOOD_SUCCESS",
      payload: {
        food: food.data
      }
    });
  } catch (error) {
    yield put({
      type: "FETCH_ONE_FOOD_ERROR",
      payload: {
        error
      }
    });
  }
}

function* patchFood({ id, data, key }) {
  const patchData = key === 'price' ? +data : data 
  try {
    const [,food] = yield all([
      yield call(patchFoodApi, [id, key, patchData]),
      yield call(fetchOneFoodApi, id)
    ]);

    yield put({
      type: "PATCH_FOOD_SUCCESS",
      payload: {
        food: food.data
      }
    });
  } catch (error) {
    yield put({
      type: "PATCH_FOOD_ERROR",
      payload: {
        error
      }
    });
  }
}

function* OneFoodSaga(test) {
  yield all([
    yield takeLatest("FETCH_ONE_FOOD_REQUEST", fetchOneFood),
    yield takeLatest("PATCH_FOOD_REQUEST", patchFood)
  ]);
}

export default OneFoodSaga;
