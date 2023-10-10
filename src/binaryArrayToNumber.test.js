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
  it('UAT1.7: When I pass [0, 1, 1, 1], Then it should return 7', () => {
    expect(binaryArrayToNumber([0, 1, 1, 1])).toBe(7);
  });
  it('UAT1.8: When I pass [1, 0, 0, 0], Then it should return 8', () => {
    expect(binaryArrayToNumber([1, 0, 0, 0])).toBe(8);
  });
  it('UAT1.9: When I pass [1, 0, 0, 1], Then it should return 9', () => {
    expect(binaryArrayToNumber([1, 0, 0, 1])).toBe(9);
  });
});

describe('User Story 2: array with digits -> return number > 10 and number < 16', () => {
  it('UAT2.1: When I pass [1, 0, 1, 0], Then it should return 10', () => {
    expect(binaryArrayToNumber([1, 0, 1, 0])).toBe(10);
  });
  it('UAT2.2: When I pass [1, 0, 1, 1], Then it should return 11', () => {
    expect(binaryArrayToNumber([1, 0, 1, 1])).toBe(11);
  });
  it('UAT2.3: When I pass [1, 1, 0, 0], Then it should return 12', () => {
    expect(binaryArrayToNumber([1, 1, 0, 0])).toBe(12);
  });
  it('UAT2.4: When I pass [1, 1, 0, 1], Then it should return 13', () => {
    expect(binaryArrayToNumber([1, 1, 0, 1])).toBe(13);
  });
});
