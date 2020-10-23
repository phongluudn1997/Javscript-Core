/*
  Bind method is a property of Function.prototype.
  Create a new bound function
*/

const jane = {
  name: "Jane",
	speak: function(line){
    	console.log(this, line);
    }
}

const unBoundSpeak = jane.speak;
unBoundSpeak("Unbound"); // -> global object.

const boundSpeak = unBoundSpeak.bind(jane, "preset argument");
boundSpeak(); // -> jane object.