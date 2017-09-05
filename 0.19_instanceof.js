//The instace of operator tests whether an object in its prototype chanin has the protoype property of a constructor
//syntax
//object instanceof constructor

//defining constructors
function C() {}
function D() {}

var o = new C();

//truebecaus: Object.getPrototypeof(o) === C.prototype
o instanceof C;


// Demonstrating that mycar is of type Car and type Object

function Car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year; 
}

var mycar = new Car ('Honda', 'Accord', 2009);
var a = mycar instanceof Car; //returns true
var b = mycar instanceof Object; //returns true