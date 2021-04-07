import { toast } from 'react-toastify';

export const notifyError = (error) => {
  return toast.error(error, {
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

export const notifySuccess = (message) => {
  return toast.success(message, {
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
  });
};
