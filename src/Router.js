import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Landing from './components/Landing'
import Login from './components/Login'
import UserLanding from './containers/UserLanding'

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
                    checkAuth() ? <Component {...props} /> : <Redirect to="/" />
                }
            />
        )
    }

    return (
        <Switch>
            <Route exact path="/" component={UserLanding} />
            <Route path="/business/login" component={Login} />
            <Route path="/user/login" component={Login} />
            <ProtectedRoute path="/user/landing" component={UserLanding} />
        </Switch>
    )
}

export default Router
