const palindromes = function (string) {
    let stringCopy = string.replace(/[\.,?! ]/g, '').toLowerCase();;


    const splitString = string.split('');
    splitString.reverse();
    let reversedString = splitString.join('').replace(/[\.,?! ]/g, '').toLowerCase();

    return stringCopy === reversedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

palindromes('Racecars!');