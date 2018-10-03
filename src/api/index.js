const axios = require('axios');

export const http = axios.create({
  baseURL: 'http://localhost:3000/api'
});

const api = (config) => {
  const {
    route,
    data,
    params,
    headers = {},
    method = 'get'
  } = config;

  return http({
    url: route,
    method,
    data,
    params,
    headers
  });
};

export default api;
