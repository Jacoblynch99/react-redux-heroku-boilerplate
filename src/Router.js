import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Hello from './componenets/Hello'

const Router = () => {
    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)

        return cookies['loggedIn'] ? true : false
    }

    const ProtectedRoute = ({ component: Component, ...rest }) => {
        return (
            <Route
                {...rest}
                render={(props) =>
                    checkAuth() ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />
        )
    }

    return (
        <Switch>
            <Route exact path="/" component={Hello} />
        </Switch>
    )
}

export default Router
