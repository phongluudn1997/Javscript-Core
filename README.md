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