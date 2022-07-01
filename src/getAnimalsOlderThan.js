const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animals = species.filter(({ name }) => name === animal);
  const [{ residents }] = animals;
  return residents.every(({ age: residentAge }) => residentAge >= age);
}

module.exports = getAnimalsOlderThan;
