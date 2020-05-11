import axios from "axios";

const request = axios.create({
  baseURL:
    "https://4dfizr0b52.execute-api.eu-west-2.amazonaws.com/test/artprojectbucket",
});

export const getScreenShots = (name) => {
  return request.get(`/${name}.png`).then(({ data }) => {
    return data;
  });
};
