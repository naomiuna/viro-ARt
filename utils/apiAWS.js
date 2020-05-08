import axios from 'axios';

const request = axios.create({
  baseURL: 'https://x1kwnb6bna.execute-api.eu-west-2.amazonaws.com/ARt',
});

export const getUserArt = (username) => {
  return request.get(`/user?username=${username}`).then(({ data }) => {
    return data;
  });
};

export const postUserArt = (body) => {
  return request
    .patch('/users', body)
    .then((response) => console.log(response));
};
