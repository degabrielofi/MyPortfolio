import axios from 'axios';
const PORT = 'https://myportfolio-production.up.railway.app/'

const api = axios.create({
    baseURL: PORT
})

export default api