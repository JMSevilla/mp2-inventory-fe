import { Externalization } from "./base/externalization";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Home } from "../views";
import { ToastContext } from "../core/context/MessageContext";
import { ControlledToast } from "../components";
const DynamicRoute = ({component: Component, ...rest}) => {
    return (
        <>
            <Route 
            {...rest}
            render={(props) => (
                <Component {...props} />
            )}
            />
        </>
    )
}

export default () => (
    <BrowserRouter>
        <Switch>
            <ToastContext>
            <ControlledToast 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            <DynamicRoute exact path={Externalization.Home.path} component={Home} />
            </ToastContext>
        </Switch>
    </BrowserRouter>
)