/**
 * Class syntax ES6
 */
class Parent1 {
  // Constructor method. mandatory in regular class
  constructor(firstName) {
    this.firstName = firstName;
  }
}

class Child1 extends Parent1 {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
}

/**
 * Constructor function
 */
function Parent2(firstName) {
  this.firstName = firstName;
}

function Child2(firstName, lastName) {
  Parent2.call(this, firstName);
  this.lastName = lastName;
}

Child2.prototype = Object.create(Parent2.prototype);
Child2.prototype.constructor = Child2;

const child2 = new Child2("fistName", "lastName");

/**
 * Object.create
 */
const ParentProto = {};

ParentProto.init = function (firstName) {
  this.firstName = firstName;
};

const ChildProto = Object.create(ParentProto);

ChildProto.init = function (firstName, lastName) {
  ParentProto.init.call(this, firstName);
  this.lastName = lastName;
};

const child3 = Object.create(ChildProto);
child3.init("firstName", "lastName");
