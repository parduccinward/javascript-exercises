const fibonacci = function(number) {
    if (number<0) return "OOPS";
    if (number == 1 || number == 2) return 1;
    let a = 0;
    let b = 1;
    let c = 0;
    for(i=0;i<number;i++){
        c = a+b;
        a = b;
        b = c;
    }
    return a;
};



// Do not edit below this line
module.exports = fibonacci;
