const convertToCelsius = function(degreeValue) {
  let celcius = (degreeValue - 32) * 5/9;
  return Number(celcius.toFixed(1));
};

const convertToFahrenheit = function(degreeValue) {
   
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
