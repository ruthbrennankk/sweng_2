const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:email', UserCtrl.getUserbyEmail)
//router.get('/user/:id', UserCtrl.getUserbyId)
router.get('/users', UserCtrl.getUsers)

module.exports = router