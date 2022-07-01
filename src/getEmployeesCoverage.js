const data = require('../data/zoo_data');

const { employees, species } = data;

const getAnimalsNames = (animalsArr) =>
  animalsArr.map((animal) => species.find(({ id }) => id === animal).name);

const getAnimalsLocations = (animalArr) =>
  animalArr.map((animal) => species.find(({ id }) => id === animal).location);

const getEmployeeCoverageByName = (name) => {
  const employee = employees.find(
    ({ firstName: fName, lastName: lname }) => fName === name || lname === name,
  );
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  const { id, firstName, lastName, responsibleFor } = employee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getAnimalsNames(responsibleFor),
    locations: getAnimalsLocations(responsibleFor),
  };
};

const getEmployeeCoverageById = (id) => {
  const employee = employees.find(({ id: employeeId }) => employeeId === id);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  const { firstName, lastName, responsibleFor } = employee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getAnimalsNames(responsibleFor),
    locations: getAnimalsLocations(responsibleFor),
  };
};

const allEmployeesCoverage = () => {
  const employeesCoverage = employees.map((employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: getAnimalsNames(responsibleFor),
      locations: getAnimalsLocations(responsibleFor),
    };
  });
  return employeesCoverage;
};

function getEmployeesCoverage(obj) {
  if (!obj) {
    return allEmployeesCoverage();
  }
  if (Object.keys(obj).includes('name')) {
    return getEmployeeCoverageByName(obj.name);
  }
  if (Object.keys(obj).includes('id')) {
    return getEmployeeCoverageById(obj.id);
  }
}

module.exports = getEmployeesCoverage;
