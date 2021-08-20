const express = require('express');
const router = express.Router();
// const mongodb = require('mongodb');
const { ensureAuth, ensureAdmin } = require('../middleware/auth');
const path = require('path');

//@desc panel
//@route GET panel

router.get('/*', ensureAuth, ensureAdmin, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/panel/index.html'));
});

router.get('/usuario', ensureAdmin, (req, res) => {
    usuario = req.user.google;
    res.send(usuario);
});

module.exports = router;
