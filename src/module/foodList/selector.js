import { createSelector } from "reselect";

const getFoods = state => state.foods.foods;
export const getLoading = state => state.foods.isLoading;

export const getFoodsData = createSelector(getFoods, Foods => Foods);
