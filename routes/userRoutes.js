const {createUser, verifyUser} = require('../controllers/userController')
const express = require('express')
const router  = express.Router()

router.post('/register', createUser)
router.post('/verify/:_id/:token', verifyUser)

module.exports = router