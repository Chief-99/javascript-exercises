const removeFromArray = function(array, ...values) {
    for (let value of values) {
        while (array.includes(value)) {
            array.splice(array.indexOf(value), 1);
        }
    }

    return array;
};



// Do not edit below this line
module.exports = removeFromArray;