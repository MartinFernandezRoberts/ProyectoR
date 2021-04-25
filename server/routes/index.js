const express = require('express')
const router = express.Router()
const mongodb = require('mongodb')

// @desc Index/Public page
// @route GET /

router.get('/', (req, res) => {
    res.send('index')
})

module.exports = router