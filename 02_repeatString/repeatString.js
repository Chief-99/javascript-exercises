const repeatString = function(string, num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += string;
  }

  if (num < 0) {
    return 'ERROR';
  } else {
    return result;
  }
};

console.log(repeatString('hey', 0));

// Do not edit below this line
module.exports = repeatString;
