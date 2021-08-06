import axios from "axios";

const api = axios.create({ baseURL: "https://whenisthenextmcufilm.com/api" });

export default api;