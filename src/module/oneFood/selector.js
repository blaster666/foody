import { createSelector } from "reselect";

const getFood = state => state.oneFood.oneFood;
const getLoad = state => state.oneFood.isLoading;

export const getFoodData = createSelector(getFood, Food => Food);
export const getLoading = createSelector(getLoad, isLoading => isLoading);
