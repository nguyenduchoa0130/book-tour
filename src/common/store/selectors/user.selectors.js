import { createSelector } from 'reselect';

const selectUserFeature = (rootState) => rootState.user;

export const selectUser = createSelector(selectUserFeature, (user) => user);
