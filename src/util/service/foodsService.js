import axios from "axios";

export function fetchFoodsApi() {
  return axios.request({
    method: "get",
    url: "//localhost:3001/api/foods"
  });
}

export function fetchOneFoodApi(id) {
  return axios.request({
    method: "get",
    url: `//localhost:3001/api/foods/${id}`
  });
}

export function patchFoodApi(saga) {
  const [id, key, data] = saga;
  return axios.patch(`//localhost:3001/api/foods/${id}`, {
    [key]: data
  });
}

export function addFoodApi({ name, price }) {
  return axios.request({
    method: "post",
    url: "//localhost:3001/api/foods",
    data: {
      name,
      price
    }
  });
}

export function deleteFoodApi(id) {
  return axios.delete(`//localhost:3001/api/foods/${id}`);
}

export function registerApi({ email, password }) {
  return axios.request({
    method: "post",
    url: "//localhost:3001/user/register",
    data: {
      email,
      password
    }
  });
}
