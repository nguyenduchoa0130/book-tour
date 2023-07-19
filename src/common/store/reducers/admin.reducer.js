import { AdminActions } from '../actions';

const initialState = {
  users: [],
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AdminActions.SET_USERS: {
      return {
        ...state,
        users: payload,
      };
    }
    case AdminActions.SET_NEW_USER: {
      const idx = state.users.findIndex((data) => data.roleId === payload.VaiTro);
      state[idx].users.push(payload);
      return {
        ...state,
        admin: [...state.admin],
      };
    }
    default: {
      return state;
    }
  }
};

export default adminReducer;
