const data = require('../data/zoo_data');

const { species } = data;

const { hours } = data;

const isAnimal = (target) => {
  const findAnimal = species.find(({ name }) => name === target);
  return findAnimal !== undefined;
};

const isDay = (day) => {
  const findDay = Object.keys(hours).find((key) => key === day);
  return findDay !== undefined;
};

const getAnimalSchedule = (animal) => {
  const findAnimal = species.find(({ name }) => name === animal);
  return findAnimal.availability;
};

const getDaySchedule = (day) => {
  if (day === 'Monday') {
    return { [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const animalDays = species.filter(({ availability }) => availability.includes(day));
  return {
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: animalDays.map(({ name }) => name),
    },
  };
};

const getAllSchedules = () => {
  const days = Object.keys(hours);
  const animalSchedule = days.map((day) => {
    const animalDays = species.filter(({ availability }) => availability.includes(day));
    if (day === 'Monday') {
      return { [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
    }
    return {
      [day]: {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: animalDays.map(({ name }) => name),
      },
    };
  });
  return animalSchedule.reduce((acc, curr) => ({ ...acc, ...curr }), {});
};

function getSchedule(scheduleTarget) {
  if (isAnimal(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }
  if (isDay(scheduleTarget)) {
    return getDaySchedule(scheduleTarget);
  }
  return getAllSchedules();
}

module.exports = getSchedule;
