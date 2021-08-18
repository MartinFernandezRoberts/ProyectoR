import { string, setLocale } from 'yup';
import es from 'yup-es';
import Validator from '../form/Validator';

setLocale(es);

export default new Validator({
    correo: string().required().email(),
    password: string().required().min(8),
});
