import { authService } from '../../services';
import AlertUtil from '../../utils/alert.util';
import { hideLoading, showLoading } from './global.actions';

export const SET_USER = '[User] set user';
export const SIGN_OUT = '[User] sign out';

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const signIn = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const user = await authService.signIn(payload);
      dispatch(setUser(user));
      return true;
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
      return false;
    } finally {
      dispatch(hideLoading());
    }
  };
};

export const signUp = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const user = await authService.signUp(payload);
      dispatch(setUser(user));
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      await authService.signOut();
      dispatch({ type: SIGN_OUT });
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};
