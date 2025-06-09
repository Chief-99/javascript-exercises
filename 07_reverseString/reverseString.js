const reverseString = function(string) {
    let result = '';
    let splitString = string.split('');
    result = splitString.reverse().join('');

    return result;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
