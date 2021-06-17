const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Banner = require('../../models/Banner');


//GET
router.get('/', async (req, res) => {
    try {
        const banner = await Banner.find()
            .lean();
        res.send({
            banner,
        });
    } catch (err) {
        console.error(err);
    }
});

router.post('/',  async (req, res, next) => {
    try {
        console.log('algún día recibiré un banner y lo guardaré');
        console.log(req.body);
        // un banner tiene ruta_imagen, url
        await Banner.create(req.body);
        res.status(201).send('Banner añadido.');
    } catch (err) {
        console.error(err);
    }
});





const archivoAgenda = path.join(__dirname, '../../jobs/agenda.json');
if (!fs.existsSync(archivoAgenda))
    fs.writeFileSync(archivoAgenda, JSON.stringify([]));
const agenda = require(archivoAgenda);

router.post('/agendar', async (req, res, next) => {
    try {
        console.log('algún día podré agendar banners');
        // ubicación    string
        // id_banner    id
        // fecha_ini    string (ISO 8601)
        // fecha_fin    string (ISO 8601)
        // horario      bool
        // recurrencia  enum ['continuado', 'semanal']
        // iteración    num
        const {ubicación, idBanner, fechaIni, fechaFin, horario, recurrencia, iteración} = req.body;
        
        let newAgenda = {
            ubicación,
            idBanner,
            fechaIni,
            fechaFin,
            horario,
            recurrencia,
            iteración
        };

        agenda.push(newAgenda);
         await fs.promises.writeFile(
            archivoAgenda,
            JSON.stringify(agenda)
        );
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;