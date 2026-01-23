//The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.The value saved to kelvin will stay constant. Choose the variable type with this in mind.

const Kelvin = 0;
console.log(Kelvin);

//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

let celsius = Kelvin - 273;
console.log(celsius);

//Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

//Fahrenheit = Celsius * (9/5) + 32

//In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.

let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

//Use console.log and string interpolation to log the temperature in fahrenheit. Use string interpolation to replace <TEMPERATURE> with the value saved to fahrenheit.
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);

// create Newton in the same way
let Newton = celsius * (33 / 100);
console.log(Newton);
Newton = Math.floor(Newton);
console.log(Newton);
