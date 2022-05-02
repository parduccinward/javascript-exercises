const repeatString = function(string,num) {
    const repeatedStrings = [];
    for(let i = 0; i<num;i++){
        repeatedStrings.push(string);
    }
    return repeatedStrings.join("");
};

// Do not edit below this line
module.exports = repeatString;
