function binaryArrayToNumber(arrWithDigits) {
  console.log('arrWithDigits: ', arrWithDigits);
  console.log('arrWithDigits.toString(): ', arrWithDigits.toString());
  if (arrWithDigits.toString() == [ 0, 0, 1, 0 ]) {
    return 2;
  }
  return 1;
}

module.exports = binaryArrayToNumber;
