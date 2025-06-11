const fibonacci = function(input) {
    let num = Number(input);
    let sum = 0;
    const arrayFib = [1, 1];
    let previous = 0;
    let current = 0;

    while ((num - 2) > 0) {
        previous = arrayFib[arrayFib.length - 2];
        current = arrayFib[arrayFib.length - 1];
        sum = previous + current;
        arrayFib.push(sum);
        num--;
    }

    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return 'OOPS';
    }

    return arrayFib.pop();
};

// Do not edit below this line
module.exports = fibonacci;
