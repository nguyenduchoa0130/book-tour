import { GlobalActions } from './../actions';

const initialState = {
  isLoading: false,
};

const globalReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GlobalActions.SHOW_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GlobalActions.HIDE_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default globalReducer;
