const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    let clean = string.toLowerCase().split('').filter((c) => alphanumerical.includes(c)).join('');
    let reverse = clean.split('').reverse().join('');
    return clean === reverse;
};

// Do not edit below this line
module.exports = palindromes;
