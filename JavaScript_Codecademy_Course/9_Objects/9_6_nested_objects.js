let spaceship = {
  passengers: [{ Key: "P1" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
/* 1. Create a variable capFave and assign the favorite food of captain (the 
element in the “0th” index of 'favorite foods' array) to it. 
  2. Right now, the passengers property has a value of null. Instead, assign 
  as its value an array of objects. These objects should represent the spaceship 
  object’s passengers as individual objects. Make at least one passenger object in 
  the array that has at least one key-value pair.
  3. Create a variable firstPassenger and assign the first passenger as its value 
  (the element in the “0th” index of the spaceship.passengers array you just made)*/
const capFave = spaceship.crew.captain["favorite foods"][0];
const firstPassenger = spaceship.passengers[0];
