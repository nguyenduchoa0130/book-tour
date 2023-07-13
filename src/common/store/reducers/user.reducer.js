import { UserActions } from '../actions';

const initialState = null;

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserActions.SET_USER: {
      return {
        ...state,
        ...payload,
      };
    }
    case UserActions.SIGN_OUT: {
      return null;
    }
    default: {
      return state;
    }
  }
};
export default userReducer;
