import axios from 'axios';

export function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
};

export function loginApi() {
  return axios({
    method: "post",
    url: "https://testapi.io/api/jundat95/api/v1/login-success"
  });
};
