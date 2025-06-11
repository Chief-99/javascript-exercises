const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function(number, power) {
  let product =1;
	while (power > 0) {
    product *= number;
    power--;
  }
  return product;
};

const factorial = function(number) {
  let product = 1;
	while (number > 0) {
    product *= number;
    number--;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
