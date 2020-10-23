/*
  Each object has a prototype.
  Prototype is another object works like a fallback
  of property sources.
  Acestor Prototype is Object.prototype.
  We also have many built-in prototype likes
  Array.prototype, Function.prototype.
*/

// Creat a prototype, which is an object
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

// Create an object with prototype is protoRabbit
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!");
// -> The killer rabbit says 'SKREEE!'

// Get prototype of an object
console.log(Object.getPrototypeOf(killerRabbit) === protoRabbit);
// -> protoRabbit

/*
  Another way using function to create an object with specific
  prototype for us.
*/

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
let whiteRabbit = makeRabbit("white");
console.log(Object.getPrototypeOf(whiteRabbit) === protoRabbit)
// -> true
// Work like the same as above.

/*
Another easier way is using opperator `new`, this will create
an empty object with exact prototype, then bind this object to keyword `this` automatically
*/
function Rabbit(type){
  this.type = type;
}
Rabbit.prototype.speak = function(line){
  console.log(`The ${this.type} rabbit says '${line}'`)
}

let blackRabbit = new Rabbit("black");
console.log(Object.getPrototypeOf(blackRabbit) === Rabbit.prototype)
// -> true

/*
We need opperator `new` to bind `this` from global object
to the newly created empty object.
*/
