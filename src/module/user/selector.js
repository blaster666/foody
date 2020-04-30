import { createSelector } from "reselect";

const getUser = ({ user }) => user;

export const getUserData = createSelector(getUser, (user) => user);
