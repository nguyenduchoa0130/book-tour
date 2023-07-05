const SHOW_LOADING = '[Global] show loading';
const HIDE_LOADING = '[Global] hide loading';

const showLoading = () => {
  return {
    type: SHOW_LOADING
  };
};

const hideLoading = () => {
  return {
    type: HIDE_LOADING
  };
};

export { SHOW_LOADING, HIDE_LOADING, showLoading, hideLoading };
