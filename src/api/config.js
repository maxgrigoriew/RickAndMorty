import axios from 'axios';

export const API_URL = 'https://rickandmortyapi.com/api';
const config = {
    baseURL: API_URL,
};
const api = axios.create(config);
export { api };