import axios from "axios";
const PORT = "https://myportfolio-l7k5.onrender.com";

const api = axios.create({
  baseURL: PORT,
});

export default api;
