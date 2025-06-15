const needle = require('needle'); //requires needle
const breedName = process.argv[2];
const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

needle.get(apiURL, (error, response, body) => {
  if (error) {
    console.error('Request failed:', error);
    return;
  }
  console.log(typeof body);
  
  // Check if breeds were found
  if (body.length === 0) {
    console.log('Breed not found. Try another.');
    return;
  }

  //Access first entry in array
  console.log(body[0].description);
});
