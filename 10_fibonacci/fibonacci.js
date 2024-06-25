const fibonacci = function(num) {
    const n = parseInt(num);
    if (typeof n !== "number" || n < 0) {
        return "OOPS";
    }

    if (n === 0) {
        return 0;
    }

    let first = 1;
    let second = 1;
    for (let i = 2; i < n; i++) {
        let temp = first + second;
        first = second;
        second = temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
