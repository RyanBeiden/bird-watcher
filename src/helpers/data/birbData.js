import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBirbsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/birbs.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allBirbs = response.data;
      const myBirbs = [];

      if (allBirbs) {
        Object.keys(allBirbs).forEach((birbId) => {
          allBirbs[birbId].id = birbId;
          myBirbs.push(allBirbs[birbId]);
        });
      }
      resolve(myBirbs);
    })
    .catch((err) => reject(err));
});

const getBirbById = (birbId) => axios.get(`${baseUrl}/birbs/${birbId}.json`);

const createBirb = (newBirb) => axios.post(`${baseUrl}/birbs.json`, newBirb);

const deleteBirb = (birbId) => axios.delete(`${baseUrl}/birbs/${birbId}.json`);

const updateBirb = (birbId, editedBirb) => axios.put(`${baseUrl}/birbs/${birbId}.json`, editedBirb);

export default {
  getBirbsByUid,
  getBirbById,
  createBirb,
  deleteBirb,
  updateBirb,
};
