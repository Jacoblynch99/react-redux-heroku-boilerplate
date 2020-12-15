import React from 'react'
import {
    AppBar,
    Grid,
    Typography,
    Avatar,
    Box,
    Toolbar,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import pic from '../images/flufferNutter.jpg'
import useStyles from '../style'

const Navigation = (props) => {
    const classes = useStyles()
    return (
        <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <AppBar
                color="primary"
                position="relative"
                style={{ width: '100vw' }}
            >
                {/* <Grid item className={classes.avatarIcon}>
                    <Avatar alt="Fluffer Nutter" src={pic} />
                </Grid> */}
                <Grid item className={classes.navTitle}>
                    <Typography
                        variant="h4"
                        style={{
                            color: 'white',
                            marginLeft: '45vw',
                        }}
                    >
                        Carry On
                    </Typography>
                </Grid>
                {/* <Grid item className={classes.menuIconStyle}>
                    <MenuIcon />
                </Grid> */}
            </AppBar>
        </Grid>
    )
}

export default Navigation
