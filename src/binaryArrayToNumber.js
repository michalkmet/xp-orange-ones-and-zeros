function binaryArrayToNumber(arrWithDigits) {
  console.log('arrWithDigits: ', arrWithDigits);

  let result = 0;

  if (arrWithDigits[arrWithDigits.length - 1] === 1) {
    result += 1;
  }
  if (arrWithDigits[arrWithDigits.length - 2] === 1) {
    result += 2;
  }
  if (arrWithDigits[arrWithDigits.length - 3] === 1) {
    result += 4;
  }

  console.log('result: ', result);
  return result;
}

module.exports = binaryArrayToNumber;
