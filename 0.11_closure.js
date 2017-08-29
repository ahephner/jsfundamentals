// closure function has access to both nested function and outter function

// has access to all variables inner, global, outter.



// this 

// Immediately 
Invoked Function Expression  aka IIFE

// Creates privacy for your application with the internet. Create a scope that prevents errors creates a local scope just for your a wrapped in parathesis will imdately call it's self
// cant refer to it outside fo the function


let i = 4 

console.log(i);
(function(){
var arraigh = [];

arraigh.push (i, i + 1, i+2);
console.log(arraigh[0]);
console.log(arraigh[1]);
console.log(arraigh[2]);

})();

console.log(i);


