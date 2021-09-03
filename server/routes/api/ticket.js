const express = require('express');
const { ensureAuth, ensureAdmin } = require('../../middleware/auth');
const router = express.Router();
const Item = require('../../models/Item');
const Ticket = require('../../models/Ticket');

//get ticket por item a sortear
router.get('/:id', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        const ticket = await Ticket.find({
            item: req.params.id,
        }).lean();

        res.send(ticket);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

//get ticket por usuario
router.get('/usuario/:id', ensureAuth, async (req, res) => {
    try {
        const ticket = await Ticket.find({
            usuario: req.params.id,
        }).lean();
        res.send(ticket);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
