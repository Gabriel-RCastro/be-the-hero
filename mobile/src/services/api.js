import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.10:3333', //IP DO PC E A PORT DO NODE
});

export default api;