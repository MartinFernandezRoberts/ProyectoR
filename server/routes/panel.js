const express = require('express')
const router = express.Router()
const mongodb = require('mongodb')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const path = require('path')


/** 
 *@desc panel
 *@route GET panel
*/
/* router.get('/', ensureAuth, (req, res) => {

}) */
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/panel.html'))

//    res.sendFile(path.join(public, 'staff.html'));
})
module.exports = router