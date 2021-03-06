import axios from 'axios';

const url = `https://rifasapp.cl/api/banners/`;

class BannerService {
    // Index
    static async index() {
        return await axios
            .get(url)
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

export default BannerService;
