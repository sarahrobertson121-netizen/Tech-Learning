//Create a variable named myAge, and set it equal to your age as a number.
let myAge = 35;
//Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.
let earlyYears = 2;
//Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
earlyYears *= 10.5;
console.log(earlyYears);
//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.Set the result equal to a variable called laterYears. We’ll be changing this value later.
let laterYears = myAge - 2;
console.log(laterYears);
//Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
laterYears *= 4;
console.log(laterYears);
//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
//Let’s use a string method next. Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName. The .toLowerCase() method returns a string with all lowercase letters
let myName = "Sarah Robertson".toLowerCase();
//Write a console.log() statement that displays your name and age in dog years. Replace <NAME> with myName, <HUMAN AGE> with myAge, and <DOG AGE> with myAgeInDogYears in the sentence above.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`
);
