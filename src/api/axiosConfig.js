import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true, // permite envío de cookies

});

const API_FormType = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'multipart/form-data', // para enviar archivos
    withCredentials: true, // permite envío de cookies
  }

});

API.interceptors.request.use(config => {
  const token = Cookies.get('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  config.headers['Content-Type'] = 'application/json'; // asegura que el tipo de contenido sea JSON
  //config.headers['Content-Type'] = 'multipart/form-data'; // asegura que el tipo de contenido sea multipart/form-data
  return config;
});

export { API, API_FormType };
