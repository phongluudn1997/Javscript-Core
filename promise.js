const one = () => Promise.resolve("One");

async function myFunc() {
  const res = await one();
  return res;
}

console.log("First");
myFunc().then((value) => {
  console.log(value);
  console.log("Second");
});

/**
 * Promise.all
 * Return:
 * 1. Promise fulfills when all of the input's promises fulfill
 * 2. Promise rejects when any of the inputs promises rejects, with this first reject reason
 */
Promise.all([
  new Promise((resolve) => setTimeout(resolve, 1000, 1)),
  new Promise((_, reject) => setTimeout(reject, 2000, "Error message")),
  new Promise((resolve) => setTimeout(resolve, 3000, 2)),
])
  .then(console.log)
  .catch(console.error);

/**
 * Promise.allSettled
 * Return:
 * Promise fulfills when all of the input's promises settle
 * with an array of objects describe the outcome of each promise.
 * e.g. [{status: "fulfilled", value: 1}, status: "rejected", reason: "Error message"]
 */
Promise.allSettled([
  new Promise((resolve) => setTimeout(resolve, 1000, 1)),
  new Promise((_, reject) => setTimeout(reject, 2000, "Error message")),
  new Promise((resolve) => setTimeout(resolve, 3000, 2)),
]).then(console.log);

/**
 * Return:
 * First settled promise (either fulfilled or rejected)
 */
Promise.race([
  new Promise((_, reject) => setTimeout(reject, 1000, "Error message")),
  new Promise((resolve) => setTimeout(resolve, 2000, 1)),
])
  .then(console.log)
  .catch(console.error);

/**
 * Return:
 * 1. First fulfilled promise
 * 2. AggregateError if all promises are rejected
 */
Promise.any([
  new Promise((_, reject) => setTimeout(reject, 1000, "Error message")),
  new Promise((_, reject) => setTimeout(reject, 2000, "Second error message")),
])
  .then(console.log)
  .catch(console.error);
