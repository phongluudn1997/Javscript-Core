// "use strict";

/*
  `this` when use in a function, always refer to
  global object.

  `this` when use in a method (a kind of property hold a value function)
  bind to the object who call it (method)
*/

let rabbitObj = {
  speak: function () {
    console.log(this);
    // -> this refer to the caller object

    function letSayThis() {
      console.log(this);
      // -> this refer to global object
    }
    letSayThis();

    const arrFunc = () => {
      console.log(this);
      // -> because this arrow function is called in speak function
      // so that it also has this.
    };
    arrFunc();
  },
};

rabbitObj.speak();
