const removeFromArray = function(array, elements) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== elements) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
