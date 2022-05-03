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

// Do not edit below this line
module.exports = leapYears;
