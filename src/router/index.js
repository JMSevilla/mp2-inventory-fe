import { Externalization } from "./base/externalization";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Home, SysAdReg } from "../views";
import { ToastContext } from "../core/context/MessageContext";
import { ControlledToast } from "../components";
import { AuthContext } from "../core/context/AuthContext";
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
                <AuthContext>
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
                        <DynamicRoute exact path={Externalization.SysAdReg.path} component={SysAdReg} />
                </AuthContext>
            </ToastContext>
        </Switch>
    </BrowserRouter>
)