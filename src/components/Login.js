import React, { useState } from 'react'
import { Grid, TextField, Button, Typography } from '@material-ui/core'
import { Redirect } from 'react-router'

const Login = (props) => {
    let [state, setState] = useState({
        username: '',
        password: '',
    })
    const [valid, setValid] = useState(false)

    const path = props.location.pathname

    const handleTextChange = (e) => {
        const prevState = { ...state }
        prevState[e.target.name] = e.target.value
        setState(prevState)
    }

    const submitForm = (e) => {
        e.preventDefault()
        document.cookie = 'loggedIn=true;max-age=8000000*1000'
        setValid(true)
        console.log(valid)
    }

    if (valid) {
        return <Redirect to="/user/landing"></Redirect>
    } else {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ height: '100vh', width: '100wh' }}
            >
                <Grid item>
                    <Typography variant="h4">Welcome User</Typography>
                </Grid>
                <Grid item>
                    <form
                        onSubmit={submitForm}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <TextField
                            required
                            name="username"
                            label="Username"
                            type="username"
                            variant="outlined"
                            value={state.username}
                            onChange={handleTextChange}
                            style={{ width: 200, marginTop: 20 }}
                        />
                        <TextField
                            required
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={state.password}
                            onChange={handleTextChange}
                            style={{ width: 200, marginTop: 20 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ width: 200, marginTop: 20 }}
                        >
                            GEO
                        </Button>
                    </form>
                </Grid>
            </Grid>
        )
    }
}

export default Login

// if (path === '/business/login') {
//     return (

//         <Grid
//             container
//             direction="column"
//             justify="center"
//             alignItems="center"
//             style={{ height: '100vh', width: '100wh' }}
//         >
//             <Grid item>
//                 <Typography variant="h4">Welcome Business</Typography>
//             </Grid>
//             <Grid item>
//                 <form
//                     onSubmit={submitForm}
//                     style={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         flexDirection: 'column',
//                     }}
//                 >
//                     <TextField
//                         required
//                         name="username"
//                         label="Username"
//                         type="username"
//                         variant="outlined"
//                         value={state.username}
//                         onChange={handleTextChange}
//                         style={{ width: 200, marginTop: 20 }}
//                     />
//                     <TextField
//                         required
//                         name="password"
//                         label="Password"
//                         type="password"
//                         variant="outlined"
//                         value={state.password}
//                         onChange={handleTextChange}
//                         style={{ width: 200, marginTop: 20 }}
//                     />
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         style={{ width: 200, marginTop: 20 }}
//                     >
//                         Login
//                     </Button>
//                 </form>
//             </Grid>
//         </Grid>
//     )
// } else {
