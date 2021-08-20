const express = require('express');
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const router = express.Router();
const path = require('path');

// const mongodb = require('mongodb')

// @desc Index/Public page
// @route GET /

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/cuenta', ensureAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/cuenta/:id', ensureAuth, (req, res) => {
    user = req.user.google;
    res.send(user);
});

module.exports = router;
