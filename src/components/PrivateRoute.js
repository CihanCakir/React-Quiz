import React from 'react'
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user') ?
            <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />

)
export const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('role ') === 1 ?
            <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />

)

