import { TourActions } from '../actions';

const initialState = [];

const toursReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TourActions.SET_TOURS: {
      return [...payload];
    }
    case TourActions.SET_NEW_TOUR: {
      return [...state, payload];
    }
    default: {
      return state;
    }
  }
};
export default toursReducer;
