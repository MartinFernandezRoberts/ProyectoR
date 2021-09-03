import { string, setLocale } from 'yup';
import es from 'yup-es';
import Validator from '../form/Validator';

setLocale(es);

export default new Validator({
    nombre: string().required(),
    correo: string().required().email(),
    // telefono: string().min(9),
});
