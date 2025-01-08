const reverseString = function(string) {
  const l = string.length;
  let result = '';

  for (let i = l - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
};

console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;
