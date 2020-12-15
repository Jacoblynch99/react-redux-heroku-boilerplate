const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./routers/users')
const authRouter = require('./routers/auth')
const path = require('path')
const inProduction = process.env.NODE_ENV === 'production'
const app = express()
const cors = require('cors')
app.use(cors())
require('dotenv').config()

app.use(express.static(path.join(__dirname, '../build')))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Content-Type', 'application/json')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, authorization'
    )
    res.header('Access-Control-Allow-Methods', '*')
    next()
})

const port = process.env.PORT || 4001

app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.send('Welcome to our server!')
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// })

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`)
})
