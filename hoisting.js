/**
 *                      | hoisted |     value    |                      scope
 * func declaration         yes         itself        block(strict mode) | function(sloppy mode)
 * var                      yes         undefined                       function
 * let, const               no          TDZ                             block
 * arrow, expression func                       depend on var, let, const
 */

"use strict";
function a() {
  if (true) {
    function b() {}
  }
  console.log(b); // b in sloppy mode and error in strict mode
}
a();
