import axios from 'axios';

const url = 'http://localhost:3000/api/destacados/';

class CasaService {
    // Index
    static async index() {
        return await axios
            .get(url)
            .then((res) => res.data)
            .catch((err) => console.error(err));
    }

    // Lista
    static async lista() {
        return await axios
            .get(`${url}lista`)
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
