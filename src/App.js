import React, { useState } from 'react'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

function App() {
    let [prefersDarkMode, setMode] = useState(true)
    let [primaryColor, setPrimaryColor] = useState({
        light: '#3f50b5',
        dark: '#1B5E20',
    })
    let [textColor, setTextColor] = useState({
        light: '#fff',
        dark: '#000000',
    })

    const toggleDarkMode = () => {
        setMode(prefersDarkMode === false ? true : false)
    }

    const setColor = (event) => {
        console.log(event.target.name, event.target.value)

        event.target.name === 'primary'
            ? prefersDarkMode
                ? setPrimaryColor({ ...primaryColor, dark: event.target.value })
                : setPrimaryColor({
                      ...primaryColor,
                      light: event.target.value,
                  })
            : console.log('Error occurred in handling dark mode')

        event.target.name === 'contrastText'
            ? prefersDarkMode
                ? setTextColor({ ...textColor, dark: event.target.value })
                : setTextColor({
                      ...textColor,
                      light: event.target.value,
                  })
            : console.log('Error occurred in handling dark mode')
    }

    const theme = createMuiTheme({
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: {
                main: '#F74B00',

                contrastText: '#000000',
            },
            secondary: {
                main: '#424242',

                contrastText: '#fff',
            },
        },
    })

    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Router />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    )
}

export default App
