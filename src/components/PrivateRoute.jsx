import  React  from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    let havId = localStorage.getItem("id");
    return (
        <Route {...rest} render={ props => (
            havId !== null ? <Component {...props}/> : <Redirect to = "/login"/>
        )} />
    );
}

export default PrivateRoute;