import React from 'react'
import { Button, Grid, Typography, Container } from '@material-ui/core'

import { Link } from 'react-router-dom'

const Landing = (props) => {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ height: '100vh', width: '100wh' }}
        >
            <Grid
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Link to="/user/landing">User</Link>
                </Grid>
                <Grid item>
                    <Link to="/business/login">Business</Link>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography style={{ fontSize: 18 }}> MY BIO</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Landing
