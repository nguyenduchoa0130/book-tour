const DateUtils = {
  parseDateTime: (dateTime) => {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    const date = new Date(dateTime);
    return date.toLocaleDateString('vi-VN', options);
  },
};

export default DateUtils;
