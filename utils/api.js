import axios from 'axios';

const request = axios.create({
  baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1'
});

export const getArtIDs = (location) => {
  return request
    .get(`/search?geoLocaion=${location}&q=${location}&medium=Paintings`)
    .then(({ data }) => {
      return data;
    });
};

export const getArt = (id) => {
  return request.get(`/objects/${id}`).then(({ data }) => {
    const art = {};
    art.primaryImage = data.primaryImage;
    art.title = data.title;
    art.department = data.department;
    art.artistDisplayName = data.artistDisplayName;
    art.artistDisplayBio = data.artistDisplayBio;
    art.culture = data.culture;
    art.period = data.period;
    art.artistGender = data.artistGender;
    art.artistWikidata_URL = data.artistWikidata_URL;
    art.objectDate = data.objectDate;
    art.objectURL = data.objectDate;
    art.repository = data.repository;
    return art;
  });
};
