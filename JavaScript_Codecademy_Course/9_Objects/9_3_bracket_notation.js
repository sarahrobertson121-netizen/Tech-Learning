let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Create a variable isActive and assign the spaceship object’s 'Active Mission' property to it.
const isActive = spaceship["Active Mission"];
//Using bracket notation and the propName variable provided, console.log() the value of the
// 'Active Mission' property.
console.log(spaceship["Active Mission"]);
