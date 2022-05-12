const palindromes = function (string) {
    const inputString = removePunctuationCharacters(string).toLowerCase()
    const reversedString = reverseString(inputString).toLowerCase();
    return (inputString === reversedString) ? true : false;
};

function createStringArray(string){
    const stringArray = [];
    fillArrayWithCharacters(stringArray, string);
    return stringArray
}

function fillArrayWithCharacters(stringArray, string){
    for (let i = 0; i < string.length; i++) {
        stringArray.push(string.charAt(i));
    }
}

function reverseString(string){
    const stringArray = createStringArray(string);
    const reversedStringArray = stringArray.reverse();
    return reversedStringArray.join('');
}

function removePunctuationCharacters(string){
    return string.replace(/[^\p{L}]/gu,"");
}


// Do not edit below this line
module.exports = palindromes;
