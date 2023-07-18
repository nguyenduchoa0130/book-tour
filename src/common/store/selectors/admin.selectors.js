import { createSelector } from 'reselect';

const selectAdminFeature = (state) => state.admin;

export const selectUsers = createSelector(selectAdminFeature, (admin) => admin.users);
