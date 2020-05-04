import axios from 'axios';

const request = axios.create({
  baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1',
});

export const getArtIDs = (location) => {
  return request
    .get(`/search?geoLocation=${location}&q=${location}&medium=Paintings`)
    .then(({ data }) => {
      return data;
    });
};

export const getArt = (id) => {
  return request.get(`/objects/${id}`).then(({ data }) => {
    return data;
  });
};
