import { string, setLocale } from 'yup';
import es from 'yup-es';
import Validator from '../form/Validator';

setLocale(es);

export default new Validator({
    tipo: string().required(),
    titulo: string().required(),
    descripcion: string().nullable(),
    comuna: string().nullable(),
});
