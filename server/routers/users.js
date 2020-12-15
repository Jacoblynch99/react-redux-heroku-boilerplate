const express = require('express')
const usersController = require('../controllers/users')
const { jwtCheck } = require('../middleware')
const router = express.Router()

router.get('/', usersController.getAllBusinesses)

router.get('/tickets', usersController.getAllTickets)

router.post('/', usersController.createTicket)

module.exports = router
