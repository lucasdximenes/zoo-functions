const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const { responsibleFor } = employees.find((employee) => employee.id === id);
  const { residents } = species.find((specie) => specie.id === responsibleFor[0]);
  const oldest = residents.reduce((old, resident) => (resident.age > old.age ? resident : old));
  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
