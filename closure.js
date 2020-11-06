/**
 * Closure give a function access to all variables of its parents
 * even after parents long gone.
 */

function a() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const innerFunc = a();
// innerFunc();
// innerFunc();
// innerFunc();

/**
 * innerFunc can add to count even when the a function is executed
 * and out of execution context and there is no variable named count
 * in scope.
 */

// IIFE
(function () {
  const header = document.getElementById("header");
  header.style.color = "red";
  document.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
