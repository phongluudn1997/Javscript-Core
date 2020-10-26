function regFunc() {
  console.log(arguments); // -> Array of arguments
}

const expFunc = function () {
  console.log(arguments); // -> Array of arguments
};

const arrowFunc = () => {
  console.log(arguments); // -> undefined
};

/*
  Remember, in execution context, we have three things: this keyword, variable environment, scope chain.
  About this keyword, arrow function do not own this. It take 'this' from parent scope (outer function or global)
  About arguments variables, arrow function do now own this. 
*/

regFunc(1, 2, 3); // -> [1,2,3]
expFunc(1, 2, 3); // -> [1,2,3]
arrowFunc(1, 2, 3); // -> undefined, in Browser runtime.
