const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/', async (req, res, next) => {
    try {
        console.log('algún día recibiré un banner y lo guardaré');
        // un banner tiene ubicación, ruta_imagen, url
    } catch (err) {
        console.error(err);
    }
});

const archivoAgenda = path.join(__dirname, 'jobs/agenda.json');
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

        // agenda.push('eso de arriba');
        /* await fs.promises.writeFile(
            archivoAgenda,
            JSON.stringify(agenda)
        ); */
    } catch (err) {
        console.error(err);
    }
});
