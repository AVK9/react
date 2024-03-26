import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://goit-node-rest-api-im7k.onrender.com',
});
