import { createSelector } from 'reselect';

const selectorToursFeature = (state) => state.tours;

export const selectTours = createSelector(selectorToursFeature, (tours) => tours);
