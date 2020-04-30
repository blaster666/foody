import { createSelector } from "reselect";

const loading = state => state.addStatus.isLoading

export const getLoading = createSelector(loading, l => l)