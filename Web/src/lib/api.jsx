import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhosto:5000"
})

export default api