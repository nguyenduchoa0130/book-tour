export const SHOW_LOADING = '[Global] show loading';
export const HIDE_LOADING = '[Global] hide loading';

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
  };
};
