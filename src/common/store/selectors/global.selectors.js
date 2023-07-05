import { createSelector } from 'reselect';

const selectGlobalFeature = state => state.global;

const selectIsLoading = createSelector(selectGlobalFeature, global => global.isLoading);

export { selectIsLoading };
