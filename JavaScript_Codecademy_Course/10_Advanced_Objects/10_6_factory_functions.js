const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  } 
}
const tinCan = robotFactory('P-500', true)
tinCan.beep()

/* 1.Create a factory function named robotFactory that has two parameters, model and mobile (in that order). Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter.

Then add a method named beep that takes no parameters and logs 'Beep Boop' to the console.
 2. Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory() with 'P-500' as the first argument and true as the second.
 3. Call .beep() on tinCan. */