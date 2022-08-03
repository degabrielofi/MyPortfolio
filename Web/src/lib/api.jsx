import axios from 'axios';

const api = axios.create({
    baseURL: "https://myportfolio-production.up.railway.app/"
})

export default api