import { Spin } from 'antd';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { GlobalSelectors } from '../../common/store/selectors';

const LoadingSpinner = () => {
  const isLoading = useSelector(GlobalSelectors.selectIsLoading);

  return (
    <>
      {isLoading && (
        <div className={styles.spinner}>
          <Spin size='large' />
        </div>
      )}
    </>
  );
};

export default memo(LoadingSpinner);
