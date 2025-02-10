1. var, let and const

| Feature                   | var       | let                                                    | const                                                  |
|---------------------------|-----------|--------------------------------------------------------|--------------------------------------------------------|
| Re-assignable             | Yes       | Yes                                                    | No                                                     |
| Re-declarable             | Yes       | No                                                     | No                                                     |
| Hoisted                   | Yes       | Yes                                                    | Yes                                                    |
| Initial value on hoisting | undefined | Uncaught: Reference error: Variable is not defined TDZ | Uncaught: Reference error: Variable is not defined TDZ |
| Scope                     | Function  | Block                                                  | Block                                                  |
|                           |           |                                                        |                                                        |

What is hoisting in Javascript?
: variables / function can be used before initialization.

Are `let` and `const` hoisted? 
: Yes, they are hoisted to top of block (block scope) but they remain uninitialized in Temporal Dead Zone until their declaration is encountered.

Can object which is declared by keyword `const` be modified?
: Yes, because the object is stored in Heap, but `const` only prevent re-assigning this identifier to new address in Callstack.


# Algorithm
Given a string s containing just the characters parentheses/square brackets/curly brackets '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Every close bracket has a corresponding open bracket of the same type.

1. Stack - If open brackets (,{,[ add to stack, encounter close brackets pop the latest. If latest is not same type => false, if at the end stack is empty => true.
2. Recursive: Check odd, even. Check if open bracket start the string. Return true if string are "[]", "{}" or "()". Find substring of it and check them.
