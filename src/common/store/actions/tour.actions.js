import { tourService } from '../../services';
import AlertUtil from '../../utils/alert.util';
import { hideLoading, showLoading } from './global.actions';

export const SET_TOURS = '[Tour] set tours';
export const SET_NEW_TOUR = '[Tour] set new tour';

export const setTours = (tours) => {
  return {
    type: SET_TOURS,
    payload: tours,
  };
};

export const setNewTour = (tour) => {
  return {
    type: SET_NEW_TOUR,
    payload: tour,
  };
};

export const getTours = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const tours = await tourService.getTours();
      dispatch(setTours(tours));
    } catch (error) {
      AlertUtil(error?.response?.data?.message || error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

export const createTour = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const newTour = await tourService.create(payload);
      dispatch(setNewTour(newTour));
      return newTour;
    } catch (error) {
      AlertUtil(error?.response?.data?.message || error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};
