let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

/* Below the retreatMessage variable in the code editor, create an alienShip object. It 
should contain a method .retreat(), which should console.log() the retreatMessage.*/
const alienShip = {
  retreat() {
    console.log(
      "We no longer wish to conquer your planet. It is full of dogs, which we do not care for."
    );
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};
/*Add another method to the alienShip object literal. This method, .takeOff(), should 
console.log() the string 'Spim... Borp... Glix... Blastoff!'.*/

/*Invoke the two methods: first .retreat(), then .takeOff().*/
alienShip.retreat();
alienShip.takeOff();
