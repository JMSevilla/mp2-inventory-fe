import {
    createContext,
    useContext
 } from 'react'

 import {toast} from 'react-toastify'

 const ToastHandlerContext = createContext(null)

 export const ToastContext = ({children}) => {
    const handleToastify = (
        message,
        position,
        hideProgressBar,
        closeOnClick,
        pauseOnHover,
        draggable,
        progress,
        theme,
        type
    ) => {
        switch(type){
            case "success":
                toast.success(message, {
                    position: position,
                    autoClose: 5000,
                    hideProgressBar: hideProgressBar,
                    closeOnClick: closeOnClick,
                    pauseOnHover: pauseOnHover,
                    draggable: draggable,
                    progress: progress,
                    theme: theme,
                });
                break;
            case "error":
                toast.error(message, {
                    position: position,
                    autoClose: 5000,
                    hideProgressBar: hideProgressBar,
                    closeOnClick: closeOnClick,
                    pauseOnHover: pauseOnHover,
                    draggable: draggable,
                    progress: progress,
                    theme: theme,
                });
                break;
            default:
                break;
        }
    }
    return (
        <ToastHandlerContext.Provider
        value={{
            handleToastify
        }}
        >{children}</ToastHandlerContext.Provider>
    )
 }

 export const useMessageContext = () => {
    if(!ToastHandlerContext){
        throw new Error("Toast contex should be used")
    }
    return useContext(ToastHandlerContext)
 }