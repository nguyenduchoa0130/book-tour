import { RolesActions } from '../actions';

const initialState = [];

const rolesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RolesActions.SET_ROLES: {
      return [...payload];
    }
    default: {
      return state;
    }
  }
};

export default rolesReducer;
