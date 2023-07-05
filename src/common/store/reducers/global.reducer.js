import { HIDE_LOADING, SHOW_LOADING } from './../actions/global.actions';

const initialState = {
  isLoading: true
};

const globalReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case HIDE_LOADING: {
      return {
        ...state,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};
export default globalReducer;
