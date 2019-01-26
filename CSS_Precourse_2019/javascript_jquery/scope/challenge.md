## Scope Write up Challenge
student: LJZ

Scope refers the extent a variable has effect in the code. There are two types, global and local. When a variable is declared as global, it has effect everywhere, or if it is declared as local, it would only have effect within a function block. This process is mediated by the mechanism called scope chain and it looks up variable name from the current scope, then it extend outwards until it reaches to the global level. If it does not find such a variable name, it will throw an `Uncaught ReferenceError`.

It is a good practice to avoid global variable, because it often creates side effect if it is not handled properly. For example, if the same variable names are defined twice, both inside and outside multiple functions, this would create indeterminate output which is inconsistent, for example, function A, B,C all can change the value of the variable globally because they share the same variable name. We call this side effect when a function does not always produce the same determinate out put. On the other hand, when the function scope is declared locally, the function will always yield the same result and we call this function a "pure-function" because it is determinate.

In order to keep the scope chain works properly, wer can use two tecniques. One way is always use `const` or `let` when declaring a variable. Or another way would be to always use the JavaScript's strict mode, it will throw an error whenever a variable is declared without using either `const` or `let`
