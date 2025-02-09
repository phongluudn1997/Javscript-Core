
const arrowFunction = () => {
  /**
   * Uncaught ReferenceError: arguments is not defined
   * Arrow function does not have `arguments` object.
   */
  console.log(arguments)
}

function regularFunction(variable1) {
  const arrowFunction = () => {
    /**
     * Logging the variables (array) of variable1 from surrounding function
     */
    console.log(arguments)
  }
  arrowFunction()
}

regularFunction(1)
