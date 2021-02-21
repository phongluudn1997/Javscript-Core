const one = () => Promise.resolve("One");

async function myFunc() {
  const res = await one();
  return res;
}

console.log("First");
myFunc().then(value => {
  console.log(value);
  console.log("Second");
});
