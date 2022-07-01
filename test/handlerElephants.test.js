const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('count have to return elephant quantity', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('names have to return an array with all elephants names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('averageAge have to return average age of all elephants', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('location have to return location of elephants', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('popularity have to return popularity of elephants', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('availability have to return an array of availables days to visit', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('empty string param have to return null', () => {
    expect(handlerElephants('')).toBe(null);
  });
  it('undefined param have to return undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('invalid param have to return "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
