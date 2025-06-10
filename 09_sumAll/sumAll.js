const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    } else {
        if (a > b) {
            while (a >= b) {
                sum += a;
                a--;
            }    
        } else {
            while (a <= b) {
                sum += a;
                a++;
            }
        }

        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
