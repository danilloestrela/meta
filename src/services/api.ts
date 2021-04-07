import axios from 'axios';

const api = axios.create({
  baseURL: 'https://606c4bc7c445570017a46b8c.mockapi.io',
});

export default api;
