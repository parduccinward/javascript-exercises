const ftoc = function(fahrenheit) {
  return roundNumber(5/9*(fahrenheit-32));
};

const ctof = function(celsius) {
  return roundNumber(9/5*celsius)+32;
};

function roundNumber(number){
  return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
