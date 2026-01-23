const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// Declare robotEntries below this line and assign to robot:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line with a new object and robot:
const newRobot = Object.assign( {
  laserBlaster: true, 
  voiceRecognition: true},
  robot)
console.log(newRobot);