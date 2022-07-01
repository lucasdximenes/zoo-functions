const getOpeningHours = require('../src/getOpeningHours');

const closedZoo = 'The zoo is closed';
const openZoo = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('If the input is empty, it should return an object', () => {
    const obj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(obj);
  });
  it('For input "monday" and "09:00-AM", it should return "The zoo is closed"', () => {
    expect(getOpeningHours('monday', '09:00-AM')).toBe(closedZoo);
  });
  it('For input "Monday" and "09:00-AM", it should return "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closedZoo);
  });
  it('For input "Tuesday" and "09:00-AM", it should return "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(openZoo);
  });
  it('For input "Wednesday" and "09:00-PM", it should return "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closedZoo);
  });
  it('For input with invalid day, it should throw an error', () => {
    expect(() => getOpeningHours('invalid', '09:00-AM')).toThrow(
      'The day must be valid. Example: Monday',
    );
  });
  it('For input with invalid hour, it should throw an error', () => {
    expect(() => getOpeningHours('Monday', '34:00-AM')).toThrow(
      'The hour must be between 0 and 12',
    );
  });
  it('For input with invalid minute, it should throw an error', () => {
    expect(() => getOpeningHours('Monday', '09:60-AM')).toThrow(
      'The minutes must be between 0 and 59',
    );
  });
  it('For input with invalid abreviation, it should throw an error', () => {
    expect(() => getOpeningHours('Monday', '09:00-AX')).toThrow(
      // prettier-ignore
      'The abbreviation must be \'AM\' or \'PM\'',
    );
  });
  it('For input with hour a string instead of number, it should throw an error', () => {
    expect(() => getOpeningHours('Monday', 'aa:00-AM')).toThrow(
      'The hour should represent a number',
    );
  });
  it('For input with minute a string instead of number, it should throw an error', () => {
    expect(() => getOpeningHours('Monday', '09:aa-AM')).toThrow(
      'The minutes should represent a number',
    );
  });
});
