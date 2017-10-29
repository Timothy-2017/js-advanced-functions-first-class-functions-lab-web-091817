// Code your solution in this file!
// function returnFirstTwoDrivers(drivers) {
//   const fn = function(drivers) { return [drivers[0], drivers[1]]};
//   return fn(drivers);
// };

const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function(fare) {return num * fare};
};

function fareDoubler(num) {
  return num * 2;
}

function fareTripler(num) {
  return num * 3;
}

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
