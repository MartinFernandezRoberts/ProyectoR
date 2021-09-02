const express = require('express');
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const router = express.Router();
const path = require('path');
const Item = require('../models/Item');

// const mongodb = require('mongodb')

// @desc Index/Public page
// @route GET /

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/cuenta', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/crear', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/redirect', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/user', ensureAuth, (req, res) => {
    try {
        res.send({
            user: {
                nombre: req.user.google.displayName,
                correo: req.user.google.email,
            },
        });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
