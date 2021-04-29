const express = require('express');
const mongodb = require('mongodb');
const passport = require('passport');

const router = express.Router();

// @desc Auth con Google
// @route GET /auth/google

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc Google Auth callback
// @route GET /auth/google/callback

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}),
(req, res) => {
    res.redirect('/')
})

//@desc  Logout user
//@route GET /auth/logout

router.get('/logout', (req, res) =>{
    req.logOut()
    res.redirect('/')
})

module.exports = router