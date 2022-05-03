const sumAll = function(x,y) {
    let numbers = Array.from(arguments);
    if(validateNumbers(numbers) === false) return "ERROR";
    biggerNumber = getBiggerNumber(numbers);
    smallerNumber = getSmallerNumber(numbers);
    iterationSteps = (biggerNumber-smallerNumber)+1;
    let resultNumber=0;
    for(i=smallerNumber;i<=iterationSteps;i++){
        resultNumber+=i;
    }
    return resultNumber;
};

function validateNumbers(array){
    for(const number of array){
        if(number<0 || typeof number=="string" || typeof number=="object"){
            return false;
        }
    }
}

function getBiggerNumber(array){
        return (array[0]>array[1]) ? array[0] : array [1];
}

function getSmallerNumber(array){
    return (array[0]<array[1]) ? array[0] : array [1];
}

// Do not edit below this line
module.exports = sumAll;
