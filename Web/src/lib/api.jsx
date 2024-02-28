import axios from "axios";
const PORT = "http://localhost:5000";

const api = axios.create({
  baseURL: PORT,
});

export default api;
