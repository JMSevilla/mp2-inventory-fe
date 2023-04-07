import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ControlledToast = (props) => {
    const {
        position,
        autoClose,
        hideProgressBar,
        newestOnTop,
        closeOnClick,
        rtl,
        pauseOnFocusLoss,
        draggable,
        pauseOnHover,
        theme
    } = props
    return(
        <ToastContainer 
        position={position}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        newestOnTop={newestOnTop}
        closeOnClick={closeOnClick}
        rtl={rtl}
        pauseOnFocusLoss={pauseOnFocusLoss}
        draggable={draggable}
        pauseOnHover={pauseOnHover}
        theme={theme}
        />
    )
}