let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};
/*Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format:
'[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
 Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: 
'[crew member's name]: [crew member's degree]', e.g.,'Lily: Computer Engineering'.*/
for (let crewRoles in spaceship.crew) {
  console.log(`${crewRoles}:
  ${spaceship.crew[crewRoles].name}`);
}
for (let crewDegree in spaceship.crew) {
  console.log(`${spaceship.crew[crewDegree].name}:
  ${spaceship.crew[crewDegree].degree}`);
}
