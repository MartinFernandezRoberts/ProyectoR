import axios from 'axios';

const url = `http://localhost:3000/api/casas/`;

class CasaService {
    // Index
    static async index() {
        return await axios
            .get(url)
            .then((res) => res.data)
            .catch((err) => console.error(err));
    }

    // Todo
    static async todo() {
        return await axios
            .get(`${url}todo`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
    }

    // Create
    static async create(data) {
        return await axios
            .post(url, data)
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    }

    // Update
    static async update(id, data) {
        return await axios
            .post(`${url}${id}/editar`, data)
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    }

    // Destacar
    static async destacar(id, data) {
        return await axios
            .post(`${url}${id}/destacar`, data)
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    }

    // Delete
    static async delete(id) {
        return await axios
            .delete(`${url}${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

export default CasaService;
