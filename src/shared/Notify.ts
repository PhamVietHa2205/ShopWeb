import { toast } from 'react-toastify';

const timeout = 2000;

export const success = (msg:string) => {
    toast.success(msg, {
        position: "top-right",
        autoClose: timeout,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
    });
}

export const error = (msg:string) => {
    toast.error(msg, {
        position: "top-right",
        autoClose: timeout,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
    });
}

export const warn = (msg:string) => {
    toast.warn(msg, {
        position: "top-right",
        autoClose: timeout,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
    });
}