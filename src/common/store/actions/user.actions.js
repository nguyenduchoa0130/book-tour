import { authService } from '../../services';
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
    } catch (error) {
      throw error;
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
      throw error;
    } finally {
      dispatch(hideLoading());
    }
  };
};
