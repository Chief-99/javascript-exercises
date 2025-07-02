const findTheOldest = function(array) {
    let oldestIndex = 0;
    let currentAge = 0;
    let oldestAge = 0;
    let today = new Date();

    array.reduce(function(oldest, current, index) {
        if (oldest.yearOfDeath === undefined) {
            oldest.yearOfDeath = today.getFullYear();
        };

        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        currentAge = current.yearOfDeath - current.yearOfBirth;

        if (currentAge > oldestAge) {
            oldest = current;
            oldestIndex = index;
        };

        return oldest;
    }, array[0]);

    return array[oldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
