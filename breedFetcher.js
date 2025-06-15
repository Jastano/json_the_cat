// breedFetcher.js
const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(apiURL, (error, response, body) => {
    if (error) {
      callback(`Request failed: ${error}`, null);
      return;
    }

    if (body.length === 0) {
      callback('Breed not found. Try another.', null);
      return;
    }

    callback(null, body[0].description);
  });
};

module.exports = { fetchBreedDescription };

