// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return [arr[0], arr[1]];
}

const returnLastTwoDrivers = function(arr){
    return [arr[arr.length-2], arr[arr.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(fare){ 
        return multiplier*fare;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
console.log(fareDoubler(2));
console.log(fareTripler(2));


const selectDifferentDrivers = function(arrayOfDrivers, fnc){
    return fnc(arrayOfDrivers);
}
