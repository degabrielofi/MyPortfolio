import axios from "axios";
const PORT = "https://degabrieldev.onrender.com/";

const api = axios.create({
  baseURL: PORT,
});

export default api;
