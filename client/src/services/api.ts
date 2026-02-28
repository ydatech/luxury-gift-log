// axios instance with baseUrl set difference in localhost and production
import axios from 'axios';

let params = {};

if(import.meta.env.VITE_API_BASE_URL) {
    params = {
        baseURL: import.meta.env.VITE_API_BASE_URL,
    }
}
const api = axios.create(params);

export default api;