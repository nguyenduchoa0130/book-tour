import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSelectors } from '../../common/store/selectors';
import AlertUtil from '../../common/utils/alert.util';

const Auth = ({ rules, children }) => {
  const navigate = useNavigate();
  const user = useSelector(UserSelectors.selectUser);
  useEffect(() => {
    const isLoggedIn = !!user;
    rules.forEach((rule) => {
      switch (rule.name) {
        case 'IS_LOGIN': {
          if (rule.value !== isLoggedIn) {
            AlertUtil.showWarning(rule.message);
            navigate(-1);
          }
          break;
        }
        case 'CHECK_ROLE': {
          if (!isLoggedIn) {
            AlertUtil.showWarning('Bạn chưa đăng nhập !!');
            navigate('/dang-nhap');
          } else if (rule.value.includes(user.role)) {
            AlertUtil.showWarning(rule.message);
            navigate(-1);
          }
          break;
        }
        default: {
          return;
        }
      }
    });
  }, []);
  return <>{children}</>;
};

export default React.memo(Auth);
