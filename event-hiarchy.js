/**
 * Microtask Queue> Callback Queue
 */

console.log("TEST START");

// Will put this into Callback Queue
setTimeout(() => console.log("0 sec timer"), 0);

Promise.resolve("Resolved Promise 1").then(res => console.log(res));

Promise.resolve("Resolved Promise 2").then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log("TEST END");

/**
 * Run all the code not in callback first.
 * The callback of setTimeout function will be put in callback queue first.
 * The callback of Promise will be put in the microtask queue.
 * Because the priority of Microtask Queue > Callback Queue so the callback
 * from setTimeout have to wait all the microtask to be executed first.
 */
