# Execution context

When the Javascript Program start to run, it creates a global execution context. This execution context has 2 phases: **Creation Phase** and **Execution Phase**

In the creation phase, 4 different things happen:

1. In Global execution context, Javascript will create global object
2. We will always create a **this** object
3. We set assign memory space for any variables or any functions.
4. Variables declarations get assigned a default value of undefined (hoisting) and function themselves place entirely in memory

The next type of execution context is the Function Execution context which will happen when a function is invoked. The function execution context is exactly the same as global execution context except for creating a global object we create an arguments object and any arguments passed in the function get added as it like local variables to the execution context.

# Closure

Whenever you have a function inside another function, even if parent function exection context is removed from the stack the inner function will retain access to the variable environment of the parent execution context => Closure.

```javascript
function out(x) {
  function in(y) {
    return x + y;
  }
}
```

# Scope chain

Scope chain: Javascript is going to look inside the current execution context to see if the variable "x" exist, if doesn't so it will go up the scope chain to the next closest parent execution context in this case it is closure scope, it will look for that variable and it exist

# Call, Apply and Bind

Call and apply behave exactly the same way, they will immediately invoke the function. With **call** you pass argument one by one, with **apply** you pass as an array.
Bind exactly the same as call, but instead of immediatly invoke the function, it will return you a brand new function so you can invoke later

```javascript
const me = {
  name: "luu",
  age: 24,
};

function greeting(language1, language2) {
  console.log(
    `Hi, my name is ${this.name} and I'm ${this.age} years old. And I love ${language1} and ${language2}`
  );
}

greeting.call(me, "javascript", "english");
greeting.apply(me, ["javascript", "english"]);
const laterUse = greeting.bind(me, "javascript", "english");
laterUse();
```

# This keyword

- Call **this** in method: this => object call that method (not the object contains method)
- Call **this** in simple function: this => undefined (strict mode) or global object (sloppy mode)
- Call **this** in arrow function: this => this of parent scope (method or global). This is call lexical this
- Call **this** in event listener: this => DOM Element that call callback.

# Primitives vs Objects (Primitives vs Reference Types)

JS Engine has two components:

- Call stack where functions are executed: Primitives (or Primitive types) are store in the call stack, in execution context which they are declared
- Heap where objects are stored in memory: All objects (or Reference types) are get stored in the memory heap
