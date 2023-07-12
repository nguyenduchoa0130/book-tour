import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserActions } from '../../common/store/actions';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const signOut = async () => {
      await dispatch(UserActions.signOut());
      navigate('/');
    };
    signOut();
  }, []);
  return <></>;
};

export default Logout;
