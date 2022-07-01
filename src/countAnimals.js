const data = require('../data/zoo_data');

const { species } = data;

const allAnimals = () =>
  species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});

const getAnimalsBySpecie = (spec) => {
  const { specie } = spec;
  const animal = species.find(({ name }) => name === specie);
  return animal.residents.length;
};

const getAnimasBySpecieAndSex = (spec) => {
  const { specie, sex } = spec;
  const animal = species.find(({ name }) => name === specie);
  const { residents } = animal;
  const animalsOfSex = residents.filter(({ sex: animalSex }) => animalSex === sex);
  return animalsOfSex.length;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return allAnimals();
  }
  if (Object.keys(animal).length === 1) {
    return getAnimalsBySpecie(animal);
  }
  if (Object.keys(animal).length === 2) {
    return getAnimasBySpecieAndSex(animal);
  }
}

module.exports = countAnimals;
