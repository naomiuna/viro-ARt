import axios from 'axios';

const request = axios.create({
  baseURL: 'https://dbtenfj4th.execute-api.eu-west-2.amazonaws.com/ARt',
});

export const getUserArt = () => {
  return request.get('/images').then(({ data }) => {
    return data;
  });
};

export const postUserArt = (body) => {
  return request
    .post('/images', body)
    .then((response) => console.log(response));
};
