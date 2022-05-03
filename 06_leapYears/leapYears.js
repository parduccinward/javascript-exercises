const LEAP = true;
const NOT_LEAP = false;
const leapYears = function(year) {

    if (isDivisibleBy4(year)===false){
        return NOT_LEAP;
    }else if(isDivisibleBy4(year)===true && 
             isDivisibleBy100(year)===false && 
             isDivisibleBy400(year)===false){
        return LEAP;
    }else if(isDivisibleBy4(year)===true && 
             isDivisibleBy100(year)===true && 
             isDivisibleBy400(year)===false){
        return NOT_LEAP;
    }else if(isDivisibleBy4(year)===true && 
             isDivisibleBy100(year)===true && 
             isDivisibleBy400(year)===true){
        return LEAP;
    }
};

function isDivisibleBy4(year){
    return (year%4==0) ? true:false;
}

function isDivisibleBy100(year){
    return (year%100==0) ? true:false;
}

function isDivisibleBy400(year){
    return (year%400==0) ? true:false;
}

// Do not edit below this line
module.exports = leapYears;
