const express = require('express');
const { ensureGuest } = require('../middleware/auth');
const router = express.Router();
const path = require('path');

// const mongodb = require('mongodb')

// @desc Index/Public page
// @route GET /

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

module.exports = router;
