const removeFromArray = function() {
    const allArguments = Array.from(arguments);
    const arrayToShrink = allArguments.shift(); //exclude first argument that is the array
    let argumentsToRemove = allArguments;

    for (let i = 0; i<argumentsToRemove.length; i++) {
        for(let j = 0; j<arrayToShrink.length; j++){
            if(argumentsToRemove[i] === arrayToShrink[j]){
                arrayToShrink.splice(j,1);
                break;
            }
        }
    }
    return arrayToShrink;
};



// Do not edit below this line
module.exports = removeFromArray;
