module.exports = function reverse (n) {
    let number = Math.abs(n);

    let digits = [];
    while (number > 0) {
        digits.push(number % 10);
        number = parseInt(number / 10);
    }

    return +digits.join('');
}
