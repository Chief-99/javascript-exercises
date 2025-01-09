const sumAll = function(initVal, finalVal) {
  let sum = 0;

  if (initVal < 0 || 
    finalVal < 0 || 
    !Number.isInteger(initVal) || 
    !Number.isInteger(finalVal)) {

    return 'ERROR';
    
  } else {
    if (finalVal > initVal) {
      for (let i = initVal; i <= finalVal; i++) {
        sum += i;
      }
    } else {
      for (let i = finalVal; i <= initVal; i++) {
        sum += i;
      }
    }
  
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
