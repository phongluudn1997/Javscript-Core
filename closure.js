/**
 * Closure give a function access to all variables of its parents
 * even after parents long gone.
 */

function a() {
  let count = 0;
  let message = `count: ${count}`
  return function () {
    count++;
    console.log(message);
  };
}

const innerFunc = a();
innerFunc();
innerFunc();
innerFunc();

/**
 * innerFunc can add to count even when the a function is executed
 * and out of execution context and there is no variable named count
 * in scope.
 */

