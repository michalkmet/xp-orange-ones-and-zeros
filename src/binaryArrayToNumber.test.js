const binaryArrayToNumber = require('./binaryArrayToNumber');

describe('User Story 1: array with digits -> return number < 10', () => {
  it('UAT1.1: When I pass [0, 0, 0, 1], Then it should return 1', () => {
    expect(binaryArrayToNumber([0, 0, 0, 1])).toBe(1);
  });
  it('UAT1.2: When I pass [0, 0, 1, 0], Then it should return 2', () => {
    expect(binaryArrayToNumber([0, 0, 1, 0])).toBe(2);
  });
  it('UAT1.3: When I pass [0, 0, 1, 1], Then it should return 3', () => {
    expect(binaryArrayToNumber([0, 0, 1, 1])).toBe(3);
  });
  it('UAT1.4: When I pass [0, 1, 0, 0], Then it should return 4', () => {
    expect(binaryArrayToNumber([0, 1, 0, 0])).toBe(4);
  });
  it('UAT1.5: When I pass [0, 1, 0, 1], Then it should return 5', () => {
    expect(binaryArrayToNumber([0, 1, 0, 1])).toBe(5);
  });
  it('UAT1.6: When I pass [0, 1, 1, 0], Then it should return 6', () => {
    expect(binaryArrayToNumber([0, 1, 1, 0])).toBe(6);
  });
});
