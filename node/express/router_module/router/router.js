const express = require('express');

const router = express()

router.get('/user/list', (req, res) => {
    res.send('Get user list')
})

router.post('/user/add', (req, res) => {
    res.send('Add new user')
})

module.exports = router