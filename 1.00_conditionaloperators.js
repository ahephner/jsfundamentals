//the conditional operator is the only JavaScript operat that takes three operands.
//This operator is frequently used as a shortcut for the if statement

//syntax
// condition ? expr 1 : expr 2

//Parameters
//condition or conditions
//An expression that evaluates to true or false

//expr 1, expr2
//expressions with values of any type.

//Description

//If condition is true, the operator returns the value of expr1 otherwise, it returns the value of expr2

//exaple

'the fee is' + (isMember ? "$2.00 : $10.00");

//You can also assign variables depending on a ternary result

var elvisLives = Math.PI > $ ? "yep":"nope";

//Multiple ternary evaluations are also possible

var firstCheck = false;
let secondCheck= false;

access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted';

console.log(access);

