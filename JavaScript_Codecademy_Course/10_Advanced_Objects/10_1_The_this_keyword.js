const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};
console.log(robot.provideInfo());

/*Add a property called model and assign to it a value of '1E78V2'. Add another property, energyLevel, and assign to it a value of 100.
With the robot object, add a method named provideInfo() that returns the following string using interpolation:I am <MODEL> and my current energy level is <ENERGYLEVEL>. 
Check that .provideInfo() has access to the internal properties of robot. Log the result of calling the .provideInfo() method on robot to the console.

Output 'I am 1E78V2 and my current energy level is 100.' */
