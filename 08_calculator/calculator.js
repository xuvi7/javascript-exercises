const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	return args.reduce((sum, next) => sum + next, 0);
};

const multiply = function(args) {
  return args.reduce((prod, next) => prod * next, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let product = 1;
  for (let i = 2; i <= a; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
