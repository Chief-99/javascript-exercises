const convertToCelsius = function(degreeValue) {
  let celcius = (degreeValue - 32) * 5/9;
  return Number(celcius.toFixed(1));
};

const convertToFahrenheit = function(degreeValue) {
   let farenheit = degreeValue * 9/5 + 32;
   return Number(farenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
