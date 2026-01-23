const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

/*Below the robot object, reassign the _energyLevel property to 'high'.*/
robot._energyLevel = 'high'

/* Now that _energyLevel isnt a number - what happens when we call .recharge()?*/
console.log(robot.recharge())