const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
// const transport = require('../../config/transport');

router.post('/', (req, res) => {
    try {
        nodemailer.createTestAccount((err, account) => {
            if (err) {
                console.error(
                    'Failed to create a testing account. ' + err.message
                );
                return process.exit(1);
            }

            const transport = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass,
                },
            });

            const mensaje = {
                from: req.body.correo,
                to: 'Rifasapp <contacto@rifasapp.cl>',
                subject: `Consulta de ${req.body.nombre}`,
                text: req.body.mensaje,
            };

            transport.sendMail(mensaje, (err, info) => {
                if (err) {
                    //console.log('Error occurred. ' + err.message);
                    res.status(500).send('Error al enviar el correo');
                }

                console.log('Correo enviado: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log(
                    'Preview URL: %s',
                    nodemailer.getTestMessageUrl(info)
                );

                res.status(200).send('Correo enviado');
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error de servidor');
    }
});

module.exports = router;
