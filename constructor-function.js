function Person(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}

Person.prototype.speak = function () {
  console.log(`Hi, my name is ${this.firstName} and I'm ${this.age}`);
};

function Student(firstName, age, grade) {
  Person.call(this, firstName, age);
  this.grade = grade;
}

// Student.prototype.__proto__ = Person.prototype; => We can use this way
// Create a new object has prototype of Person.prototype. Then we assign it to Student.prototype
Student.prototype = Object.create(Person.prototype);

const student = new Student("Luu", 24, 12);

student.speak();
