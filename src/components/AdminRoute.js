import React from 'react'
import { Route, Redirect } from "react-router-dom";

export const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('role ') === 1 ?
            <Component {...props} />
            : <Redirect to={{ pathname: 'admin/dashboard', state: { from: props.location } }} />
    )} />

)

