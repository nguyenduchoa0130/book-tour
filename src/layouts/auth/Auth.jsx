import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSelectors } from '../../common/store/selectors';

const Auth = ({ rules, children }) => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);
  const user = useSelector(UserSelectors.selectUser);

  useEffect(() => {
    setIsChecking(false);
  }, []);

  return <>{!isChecking && children}</>;
};

export default React.memo(Auth);
