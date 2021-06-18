const fs = require('fs');
const path = require('path');
const { parentPort } = require('worker_threads');

const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

let isCancelled = false;

if (parentPort) {
    parentPort.once('message', (message) => {
        if (message === 'cancel') isCancelled = true;
    });
}

const rutaBanners = path.join(__dirname, 'banners.json');
const rutaAgenda = path.join(__dirname, 'agenda.json');
if (!fs.existsSync(rutaAgenda)) {
    console.info(`Aún no existe el archivo de agenda: ${rutaAgenda}`);
    if (parentPort) parentPort.postMessage('done');
    else process.exit(0);
}

const banners = require(rutaBanners);
const agenda = require(rutaAgenda);
const bufferAgenda = [...agenda];

const eliminarEvento = (index) => {
    try {
        bufferAgenda.splice(index, 1);
    } catch (err) {
        console.error(err);
    }
};

(async () => {
    let actualizarAgenda = false;
    let actualizarBanners = false;

    agenda.map(async (evento, index) => {
        if (isCancelled) return;

        const ahora = dayjs();
        const fechaIni = dayjs(evento.fecha_ini);
        const fechaFin = dayjs(evento.fecha_fin);
        const horaIni = fechaIni
            .clone()
            .year(ahora.year())
            .month(ahora.month())
            .day(ahora.day());
        const horaFin = fechaFin
            .clone()
            .year(ahora.year())
            .month(ahora.month())
            .day(ahora.day());
        let revisarRecurrencia = false;

        if (evento.bannerId === banners[evento.ubicacion]) {
            if (evento.horario && ahora.isAfter(horaFin)) {
                banners[evento.ubicacion].bannerId =
                    banners[evento.ubicacion].default;
                actualizarBanners = true;

                revisarRecurrencia = ahora.isAfter(fechaFin);
            } else if (ahora.isAfter(fechaFin)) {
                banners[evento.ubicacion].bannerId =
                    banners[evento.ubicacion].default;
                actualizarBanners = true;

                revisarRecurrencia = true;
            }

            if (revisarRecurrencia) {
                switch (evento.recurrencia) {
                    case 'continuado':
                        eliminarEvento(index);
                        actualizarAgenda = true;
                        break;

                    case 'semanal':
                        if (--banners[evento.ubicacion].iteracion > 0) {
                            banners[evento.ubicacion].fecha_ini = fechaIni
                                .add(1, 'week')
                                .toISOString();
                            actualizarBanners = true;
                        } else {
                            eliminarEvento(index);
                            actualizarAgenda = true;
                        }
                        break;

                    default:
                        console.error('Recurrencia no válida');
                        break;
                }
            }
        } else if (ahora.isAfter(fechaIni)) {
            if (evento.horario && ahora.isAfter(horaIni)) {
                banners[evento.ubicacion].bannerId = evento.bannerId;
                actualizarBanners = true;
            } else {
                banners[evento.ubicacion].bannerId = evento.bannerId;
                actualizarBanners = true;
            }
        }
    });

    if (actualizarBanners) {
        await fs.promises.writeFile(rutaBanners, JSON.stringify(banners));
    }

    if (actualizarAgenda) {
        await fs.promises.writeFile(rutaAgenda, JSON.stringify(bufferAgenda));
    }

    if (parentPort) parentPort.postMessage('done');
    else process.exit(0);
})();
