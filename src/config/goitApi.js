import axios from 'axios';

export const goitApi = axios.create({
  baseURL: 'https://task-manager-api.goit.global/',
});

export const setToken = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  goitApi.defaults.headers.common.Authorization = ``;
};
