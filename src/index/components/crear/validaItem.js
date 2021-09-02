import { array, object, mixed, string, setLocale, number, boolean } from 'yup';
import es from 'yup-es';
import Validator from '../form/Validator';

setLocale(es);

const schemaCasa = {
    ubicacion: string().required(),
    orientacion: string().nullable(),
    area: number().required().positive(),
    construido: number().nullable().positive(),
    wc: number().required().positive(),
    estacionamiento: number().nullable().positive(),
    dormitorio: number().required().positive(),
    piso: number().required().positive(),
    gastosComunes: number().nullable().positive(),
    bodega: boolean().nullable(),
    mascotas: boolean().nullable(),
    calefaccion: boolean().nullable(),
    cocina: boolean().nullable(),
    terraza: boolean().nullable(),
    balcon: boolean().nullable(),
    piscina: boolean().nullable(),
    quincho: boolean().nullable(),
    edificio: boolean().nullable(),
    lavanderiaE: boolean().nullable(),
    eventosE: boolean().nullable(),
};

const schemaWheels = {
    marca: string().required(),
    transmision: string().required(),
    combustible: string().required(),
    categoria: string().nullable(),
    color: string().nullable(),
    year: number().required(),
    km: number().required(),
    cilindrada: number().required(),
    rendimiento: number().nullable(),
    abs: boolean().nullable(),
    airbag: boolean().nullable(),
    ac: boolean().nullable(),
    alarma: boolean().nullable(),
    vidriosElectricos: boolean().nullable(),
};

export const validator = new Validator({
    info: object({
        tipo: string().required(),
        titulo: string().required(),
        descripcion: string().nullable(),
        comuna: string().nullable(),
    }),
    imagenes: object({
        archivos: array()
            .required()
            .of(
                mixed()
                    .test(
                        'fileSize',
                        'Archivo demasiado pesado. Peso máximo: 3 MB.',
                        (value) => value.size <= 3000 * 1024
                    )
                    .test(
                        'fileFormat',
                        'Formato no soportado. Debe ser una imagen.',
                        (value) => value.type.includes('image')
                    )
            )
            .min(1),
        borrar: array().nullable().of(string()),
    }),
    detalles: object().when('info.tipo', (tipo, schema) => {
        switch (tipo) {
            case 'Casa':
                return schema.required().shape(schemaCasa);

            case 'Wheels':
                return schema.required().shape(schemaWheels);

            default:
                return schema.nullable();
        }
    }),
    docs: object().nullable(),
    bases: object({
        bases: boolean().required(),
    }),
});

export const validaDetalles = new Validator({ ...schemaCasa, ...schemaWheels });
