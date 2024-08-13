import axios from 'axios';

export const goitApi = axios.create({
  baseURL: 'https://task-manager-api.goit.global/',
});
