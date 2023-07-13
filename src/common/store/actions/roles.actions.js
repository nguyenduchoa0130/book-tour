import { roleService } from '../../services';
import { hideLoading, showLoading } from './global.actions';

export const SET_ROLES = '[Roles] set roles';

export const setRoles = (roles) => {
  return {
    type: SET_ROLES,
    payload: roles,
  };
};

export const getRoles = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const roles = await roleService.getRoles();
      dispatch(setRoles(roles));
    } catch (error) {
      throw error;
    } finally {
      dispatch(hideLoading());
    }
  };
};
