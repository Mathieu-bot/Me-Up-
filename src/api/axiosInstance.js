import axios from 'axios';
// Use environment variable for base URL
const baseURL = process.env.VITE_API_BASE_URL;
const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
