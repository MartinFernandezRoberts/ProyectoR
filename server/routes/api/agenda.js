const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { ensureAuth, ensureAdmin } = require('../../middleware/auth');

const rutaAgenda = path.join(__dirname, '../../jobs/agenda.json');
const agenda = require(rutaAgenda);
const rutaBanners = path.join(__dirname, '../../jobs/banners.json');
const banners = require(rutaBanners);

router.post('/', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        agenda.push({ ...req.body, _id: uuidv4() });
        await fs.promises.writeFile(rutaAgenda, JSON.stringify(agenda));

        res.status(201).send('Banner agendado.');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        const index = agenda.findIndex(
            (evento) => req.params.id === evento._id
        );

        if (index >= 0) {
            const evento = agenda[index];

            if (banners[evento.ubicacion].idBanner === evento.idBanner) {
                banners[evento.ubicacion].idBanner = '';
                await fs.promises.writeFile(
                    rutaBanners,
                    JSON.stringify(banners)
                );
            }

            agenda.splice(index, 1);
            await fs.promises.writeFile(rutaAgenda, JSON.stringify(agenda));
        }

        res.status(200).send('Evento eliminado.');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
