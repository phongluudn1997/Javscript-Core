/*
  Bind method is a property of Function.prototype.
  Create a new bound function
*/

const jane = {
  name: "Jane",
  speak: function (line) {
    console.log(this, line);
  },
};

const unBoundSpeak = jane.speak;
unBoundSpeak("Unbound"); // -> global object.

const boundSpeak = unBoundSpeak.bind(jane, "preset argument");
boundSpeak(); // -> jane object.

/*
  Call, apply and bind are used to bind function to a specific object.
*/

const john = {};
jane.speak.call(john, "This is john");
jane.speak.apply(john, ["This is John"]);

// Only support in Browser runtime.
const element = document.getElementById("root");
element.addEventListener("click", jane.speak.bind(jane, "Bound!"));
