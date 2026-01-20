const newNumbers = [1, 3, 5, 7];
/*declare a new variable named newSum using the const keyword. Assign to newSum the value of 
calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.
Provide .reduce with an argument of a callback function. The callback function should have 
two parameters, accumulator and currentValue, in that order. Use either a function expression 
or an arrow function.*/
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);
/*Log the value of newSum to the console to see the return value of calling .reduce() on 
newNumbers.*/
console.log(newSum);

/*While we have this code set up, let’s also check what happens if you add a second argument 
to .reduce(). The second argument acts as an initial value for the accumulator. Add a second 
argument of 10 to .reduce().*/
