/**
 *                      | hoisted |     value    |                      scope
 * func declaration         yes         itself        block(strict mode) | function(sloppy mode)
 * var                      yes         undefined                       function
 * let, const               no          TDZ                             block
 * arrow, expression func                       depend on var, let, const
 */
