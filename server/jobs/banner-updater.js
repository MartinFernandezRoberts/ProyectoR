const fs = require('fs');
const path = require('path');
const { parentPort } = require('worker_threads');

const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

// console.log('Actualizando banners...');
let isCancelled = false;

if (parentPort) {
    parentPort.once('message', (message) => {
        if (message === 'cancel') {
            isCancelled = true;
            console.log('mensaje cancelado');
        }
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
const bufferBanners = { ...banners };
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
        // console.log(`revisando evento ${index}:`);
        // console.log(evento);
        // console.log('banner actual:');
        // console.log(banners[evento.ubicacion]);

        if (isCancelled) return;

        const ahora = dayjs();
        const fechaIni = dayjs(evento.fechaIni);
        const fechaFin = dayjs(evento.fechaFin);
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

        if (evento.idBanner === banners[evento.ubicacion].idBanner) {
            // console.log('banner actualmente asignado');

            if (evento.horario) {
                if (ahora.isAfter(horaFin)) {
                    bufferBanners[evento.ubicacion].idBanner = '';
                    actualizarBanners = true;
                    // console.log('desasignar banner');

                    revisarRecurrencia = ahora.isAfter(fechaFin);
                }
            } else if (ahora.isAfter(fechaFin)) {
                bufferBanners[evento.ubicacion].idBanner = '';
                actualizarBanners = true;
                // console.log('desasignar banner');

                revisarRecurrencia = true;
            }
        } else if (ahora.isAfter(fechaFin)) {
            // console.log('evento pasado');
            eliminarEvento(index);
            actualizarAgenda = true;
            // console.log('evento eliminado');
        } else if (ahora.isAfter(fechaIni)) {
            // console.log('fecha de inicio pasada');

            if (evento.horario) {
                if (ahora.isAfter(horaIni) && ahora.isBefore(horaFin)) {
                    // console.log('dentro de horario');
                    bufferBanners[evento.ubicacion].idBanner = evento.idBanner;
                    actualizarBanners = true;
                    // console.log('asignar banner');
                } else {
                    // console.log('fuera de horario');
                }
            } else {
                bufferBanners[evento.ubicacion].idBanner = evento.idBanner;
                actualizarBanners = true;
                // console.log('asignar banner');
            }
        } else {
            // console.log('banner no asignado, fecha de inicio aún no llega');
        }

        if (revisarRecurrencia) {
            // console.log('revisando recurrencia...');
            switch (evento.recurrencia) {
                case 'continuado':
                    eliminarEvento(index);
                    actualizarAgenda = true;
                    // console.log('evento eliminado');
                    break;

                case 'semanal':
                    if (--bufferBanners[evento.ubicacion].iteracion > 0) {
                        bufferBanners[evento.ubicacion].fechaIni = fechaIni
                            .add(1, 'week')
                            .toISOString();
                        actualizarBanners = true;
                        // console.log('evento reagendado');
                    } else {
                        eliminarEvento(index);
                        actualizarAgenda = true;
                        // console.log('evento eliminado');
                    }
                    break;

                default:
                    console.error('Recurrencia no válida');
                    break;
            }
        }
    });

    if (actualizarBanners) {
        console.log('actualizando archivo banners:');
        console.log(bufferBanners);
        await fs.promises.writeFile(rutaBanners, JSON.stringify(bufferBanners));
    }

    if (actualizarAgenda) {
        console.log('actualizando archivo agenda:');
        console.log(bufferAgenda);
        await fs.promises.writeFile(rutaAgenda, JSON.stringify(bufferAgenda));
    }

    if (parentPort) parentPort.postMessage('done');
    else process.exit(0);
})();
