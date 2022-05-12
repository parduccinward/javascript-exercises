const findTheOldest = function(people) {
    if(checkStillLiving(people)) updateArray(people);
    const oldest = people.sort((a,b) => {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })
    //console.table(oldest);
    return oldest[0];
};

function getThisYear(){
    let today = new Date();
    return today.getFullYear();
}

function checkStillLiving(people){
    for (const person of people) {
        if(!("yearOfDeath" in person)) return true;
    }
    return false;
}

function updateArray(people){
    let thisYear = getThisYear();
    for (const person of people) {
        if(!("yearOfDeath" in person)) person.yearOfDeath = thisYear;
    }
}


// Do not edit below this line
module.exports = findTheOldest;
