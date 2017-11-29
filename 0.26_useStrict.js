//the use strict keyword is declared on the global scope at the top
//it prevents us from doing certain things for this example
//you have to declare variables  or there will be errors
//use strict limits a lot of what we cannot due in code
//howeverthat can be a good thing as it makes the code tighter

'use strict'; 

// x= 23; //would cause an error
var y = 23; //would run

//must name function

// function(){} //cause error
function aj(){} //runs


//this also helps if you were to have a typo as it wont create a new variable or function if you
//dont create it

var helloTime = [{
	name: 'rick', age: 18,
	name: 'dave' ,age: 19
}];

//here is a typo  hellotime is not the same as helloTime above
hellotime.forEach(function(i){
	console.log(i.name);
}) 


//also cannot delete var or functions

var kliff = "dog";
delete kliff; 

function q(dfs){}
delete q; 

//cannot duplicate parameter: 

function c(p2, p2){}

