import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/Listings'
import Login from './containers/Login'
import Restaurant from './containers/Restaurant'
import AddListing from './containers/AddListing'

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
            {/* ROUTES HERE */}
        </Switch>
    )
}

export default Router
