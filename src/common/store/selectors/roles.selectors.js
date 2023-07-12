import { createSelector } from 'reselect';

const selectRolesFeature = (rootState) => rootState.roles;

export const selectRoles = createSelector(selectRolesFeature, (roles) => roles);
