const reverseString = function(string) {
    const stringCharacters = [];
    let stringLength = string.length;
    for (let i =0; i<stringLength; i++) {
        let lastCharacter = string.slice(-1);
        stringCharacters.push(lastCharacter);
        string = string.slice(0,string.length-1);
    }
    return stringCharacters.join('');
};

// Do not edit below this line
module.exports = reverseString;
