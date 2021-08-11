import * as yup from 'yup';
import es from 'yup-es';

export default class Validator {
    constructor(rules) {
        yup.setLocale(es);
        this.schema = yup.object().shape(rules);
    }

    getErrors(err) {
        const errors = {};
        let first = '';

        err.inner.forEach((validation) => {
            const field = validation.path;

            if (field !== first) {
                first = field;
                errors[field] = validation.errors[0];
            }
        });

        return errors;
    }

    async validateAll(data) {
        const result = {};

        await this.schema
            .validate(data, { abortEarly: false })
            .then(() => (result.valid = true))
            .catch((err) => {
                result.valid = false;
                result.errors = this.getErrors(err);
            });

        return result;
    }

    async validate(field, value) {
        let error = '';

        await this.schema.validateAt(field, { [field]: value }).catch((err) => {
            error = err.message;
        });

        return error;
    }
}
