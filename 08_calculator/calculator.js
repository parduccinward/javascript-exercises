const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
  const initialValue = 0;
  return array.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);
};

const multiply = function(array) {
  const initialValue = 1;
  return array.reduce((previousValue, currentValue) => previousValue * currentValue,initialValue);
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
  if(a===0){
    return 1;
  }else if (a===1){
    return 1;
  }else if (a>1){
    return a * (factorial(a-1));
  }
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
