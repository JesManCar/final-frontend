import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: 'https://final-backend-fzec.onrender.com',
  withCredentials: true, 
});

API.interceptors.request.use(config => {
  const token = Cookies.get('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  config.headers['Content-Type'] = 'application/json'; // asegura que el tipo de contenido sea JSON
  return config;
});

export { API, /*API_FormType */ };
