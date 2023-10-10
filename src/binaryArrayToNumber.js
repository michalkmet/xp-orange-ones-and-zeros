function binaryArrayToNumber(arrWithDigits) {
  console.log('arrWithDigits: ', arrWithDigits);

  let result = 0;

  for (let i = 0; i < arrWithDigits.length; i++) {
    if (arrWithDigits[arrWithDigits.length - 1] === 1) {
      console.log('Math.pow(2, i): ', Math.pow(2, i));
      result += Math.pow(2, i);
    }
  }

  // if (arrWithDigits[arrWithDigits.length - 1] === 1) {
  //   result += 1;
  // }
  // if (arrWithDigits[arrWithDigits.length - 2] === 1) {
  //   result += 2;
  // }
  // if (arrWithDigits[arrWithDigits.length - 3] === 1) {
  //   result += 4;
  // }
  // if (arrWithDigits[arrWithDigits.length - 4] === 1) {
  //   result += 8;
  // }

  console.log('result: ', result);
  return result;
}

module.exports = binaryArrayToNumber;
