import { Externalization } from "./base/externalization";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Home } from "../views";

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
            <DynamicRoute exact path={Externalization.Home.path} component={Home} />
        </Switch>
    </BrowserRouter>
)