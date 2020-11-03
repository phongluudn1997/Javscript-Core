// Three ways to create an object derives from a prototype

/*
  Way 1: Through class notation.
  Create a constructor function named Person.
  Create an object has prototype is Person.prototype.
  Class declarations currently allow only method-properties that
  hold function.
*/
class Person {
  constructor(name) {
    this.name = name;
  }
  speak(line) {
    console.log(`${this.name} says ${line}`);
  }
}

Person.prototype.legs = 2;

/*
  Way 2: Original way
  Create an object named personProto contains all properties
  we want other instance to inherit.
  Create a function to generate an object with prototype personProto
*/
let personProto = {
  speak: function (line) {
    console.log(`${this.name} says ${line}`);
  },
};

function PersonFunction(name) {
  let personObj = Object.create(personProto);
  personObj.name = name;
  return personObj;
}

/*
  Way 3: Using Function Constructor.
  We must use new opperator to bind `this`
  to newly created object.
*/

/**
 * Step 1: New empty object created
 * Step 2: Function is called, this => newly created empty object
 * Step 3: bind properties to object through this, link object to prototype
 * Step 4: Return created object with all bound properties
 */
function PersonConstructor(name) {
  this.name = name;

  // never do this, every new instance created, we created a function.
  // this.speak = function () {
  //   console.log(this.name);
  // };
}
PersonConstructor.prototype.speak = function (line) {
  console.log(`${this.name} says ${line}`);
};

let person1 = new Person("John");
let person2 = PersonFunction("Jane");
let person3 = new PersonConstructor("Anna");

console.log(Object.getPrototypeOf(person1) === Person.prototype); // -> true
console.log(Object.getPrototypeOf(person2) === personProto); // -> true
console.log(Object.getPrototypeOf(person3) === PersonConstructor.prototype); // -> true
