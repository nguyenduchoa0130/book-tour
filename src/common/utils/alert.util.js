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
  showWarning: (message) => {
    return Swal.fire({
      title: 'Cảnh Báo',
      text: message,
      icon: 'warning',
    });
  },
  showConfirm: (question, message) => {
    return Swal.fire({
      title: question,
      text: message,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Huỷ',
      confirmButtonColor: 'red',
    });
  },
};

export default AlertUtil;
