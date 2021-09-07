const express = require('express');
const { ensureAuth } = require('../middleware/auth');
const router = express.Router();
const path = require('path');

// @desc Index/Public page
// @route GET /

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/buscador', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/condiciones', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/cuenta', ensureAuth, async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/crear', ensureAuth, async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/login', ensureAuth, async (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'public/index.html'));
    res.redirect('/cuenta');
});

router.get('/privacidad', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/redirect', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

router.get('/user', ensureAuth, (req, res) => {
    try {
        res.status(200).send({
            nombre: req.user.google.displayName,
            correo: req.user.google.email,
        });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
