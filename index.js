const driversArray = ['Sally', 'Bob', 'd3', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = (function(drivers){
  return driversArray.slice(0,2);
})


const returnLastTwoDrivers = (function(drivers){
    return driversArray.slice(3);
  })

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function fareDoubler(fare) {
  return fare * 2
}

function fareTripler(fare) {
  return fare * 3
}

function fareQuintupler(fare){
  return fare * 5
}

function createFareMultiplier() {
    return fareQuintupler
}

function selectDifferentDrivers(driversArray, option) {
  if (option === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
  }
  else if (option === returnLastTwoDrivers) {
    return returnLastTwoDrivers();
  }
}