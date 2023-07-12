import Swal from 'sweetalert2';

const AlertUtil = {
  showSuccess: (message) => {
    Swal.fire({
      title: 'Thành Công',
      text: message,
      icon: 'success',
    });
  },
  showError: (message) => {
    Swal.fire({
      title: 'Lỗi',
      text: message,
      icon: 'error',
    });
  },
  showConfirm: (question, message) => {
    Swal.fire({
      title: question,
      text: message,
      icon: 'question',
    });
  },
};

export default AlertUtil;
