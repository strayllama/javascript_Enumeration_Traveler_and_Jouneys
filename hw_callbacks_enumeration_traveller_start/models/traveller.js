const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let startLocations = [];
  this.journeys.map((journey) => {
    startLocations.push(journey.startLocation);
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let endLocations = [];
  this.journeys.map((journey) => {
    endLocations.push(journey.endLocation);
  });
  return endLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  let transports = [];
  this.journeys.map((journey) => {
    transports.push(journey.transport);
  });
  return transports;
};


Traveller.prototype.getJourneysByTransport = function (transport) {
  let journeys = this.journeys.filter((journey) => journey.transport === transport);
  return journeys;
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let journeys = this.journeys.filter((journey) => journey.distance > minDistance);
  return journeys;
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  // let total = 0  // no??
  let total = this.journeys.reduce((runningTotal, journey) => {
     return runningTotal + journey.distance;
// console.log("***** Jouney distance is: ", journey.distance);
}, 0);  // WHAT THE FUCK

  return total;
};


Traveller.prototype.getUniqueModesOfTransport = function () {
  let uniqueListOfTransport = [];
  this.journeys.map((journey) => {
    if (!uniqueListOfTransport.includes(journey.transport)) {
      uniqueListOfTransport.push(journey.transport);
    }
  });
  return uniqueListOfTransport;
};

module.exports = Traveller;
