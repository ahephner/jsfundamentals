//The bind() method creates a new function that when called has its this keyword
//set to the provided value, with a given sequence of arguments preceding any
//provided when the new function is called

//syntax
//fun.bind(thisArg[, arg1[arg2, ...]])

this.x= 9; //this refers to global "window" object here in the browse

var module ={

	x: 81, 
	getX: function(){ rturn this.x; }
};

module.getX(); 


var retrieveX = module.getX;

retrieveX();


//create a new function with 'this' bound to module
//new programers might confuse the
//global var x with module's property x
var boundGetX = retrieveX.bind(module);

boundGetX();