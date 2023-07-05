import { selectIsLoading } from './../../common/store/selectors/global.selectors';
import { Spin } from 'antd';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const LoadingSpinner = () => {
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);
  return (
    <>
      {isLoading && (
        <div className={styles.spinner}>
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default memo(LoadingSpinner);
