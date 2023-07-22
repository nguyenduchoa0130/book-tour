import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSelectors } from '../../common/store/selectors';
import AlertUtil from '../../common/utils/alert.util';

const Auth = ({ rule, children }) => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const user = useSelector(UserSelectors.selectUser);

  useEffect(() => {
    if (rule.isLoggedIn) {
      if (!user || (rule.roles.length && !rule.roles.includes(user?.VaiTro))) {
        setIsValid(false);
        AlertUtil.showWarning('Bạn không được phép truy cập vào trang này').then(() => {
          navigate(-1);
        });
      }
    } else {
      if (user) {
        setIsValid(false);
        navigate(-1);
      }
    }
    setIsChecking(false);
  }, [rule]);

  return <>{!isChecking && isValid && children}</>;
};

export default React.memo(Auth);
