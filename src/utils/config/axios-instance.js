import axios from 'axios';

const BASE_URL = 'https://api.chooseketamine.com';
// const BASE_URL = 'https://dev-api.chooseketamine.com';

const createAxiosInstance = (token) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: token,
    },
  });
};

export default createAxiosInstance;
