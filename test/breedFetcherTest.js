const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns description for a valid breed', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(desc.trim(), expectedDesc);
      done();
    });
  });

  it('returns error for an invalid breed', (done) => {
    fetchBreedDescription('InvalidBreedName', (err, desc) => {
      assert.isNotNull(err);
      assert.equal(desc, null);
      done();
    });
  });
});
