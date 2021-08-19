const express = require('express');
const router = express.Router();
// const mongodb = require('mongodb');
const { ensureAuth, ensureAdmin } = require('../middleware/auth');
const path = require('path');

/**
 *@desc panel
 *@route GET panel
 */
/* router.get('/', ensureAuth, (req, res) => {

}) */

router.get('/*', ensureAuth, (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', 'public/panel/index.html'),
        (user) => {
            user = req.user.google;
            console.log(user);
        }
    );
});

module.exports = router;
