import { toast, ToastOptions, TypeOptions, Icons, IconProps } from 'react-toastify';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AbcSharp from "@mui/icons-material/AbcSharp"
//type messageType = "success" | "info" | "warning" | "error" | "default";

const toastOption: ToastOptions = {
    position: "top-right",

    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: 0,
    theme: "colored",
};


export const showSuccessMessage = (message: string) => {
    try {
        toastOption.style = { backgroundColor: "#2e7d32" }
        toast.success(message, toastOption);
    } catch (err: any) {
        toast.error(err.message, toastOption);
    }
};

export const showErrorMessage = (message: string) => {
    try {
        toast.error(message, toastOption);
    } catch (err: any) {
        toast.error(err.message, toastOption);
    }
};