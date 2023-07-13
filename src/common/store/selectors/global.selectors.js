import { createSelector } from 'reselect';

const selectGlobalFeature = (rootState) => rootState.global;

export const selectIsLoading = createSelector(selectGlobalFeature, (feature) => feature.isLoading);
