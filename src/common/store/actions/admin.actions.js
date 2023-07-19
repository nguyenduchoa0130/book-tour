import { userServices } from '../../services';
import AlertUtil from '../../utils/alert.util';
import { hideLoading, showLoading } from './global.actions';

export const SET_USERS = '[Admin] set users';
export const SET_NEW_USER = '[Admin] set new user';

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export const setNewUser = (user) => {
  return {
    type: SET_NEW_USER,
    payload: user,
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const users = await userServices.getUsers();
      dispatch(setUsers(users));
      return users;
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

export const createUser = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const newUser = await userServices.createUser(payload);
      dispatch(setNewUser(newUser));
      return newUser;
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};
