var foo = "foo";

(function(){
	var foo = "foo2";
	console.log(foo);
})();

console.log(foo);


//create a new functin get a new block of scope
//good way to hide something called IIFE Pattern
//puttign the () on the end of the funcition immedately executes it
//Sticking the function in the () keeps it hidden can name it
//that way in fuction var foo = 2
//TOp 2 most popular pattern in JavaScript
//IIFE Immedately Invoked Function Expression the () at the end and the (Function at start make it
//The exectuor would say i have a funtion that needs an immedate value wouldnt ask global at all only local

var foo = 'foo';

(function(bar){

	var foo = bar; 
	console.log(foo);
})(foo);

console.log(foo);

//so this is where you call it globally that way if you have 100 functions in IIFE that are private but 2 that are global you can share those but keep the private private

//Block Scope ES6 let keywork

//let will highjack the scope it is in 

function foo() {
	var bar = "bar";
	for (let i=0; i<bar.lenght; i ++) {
		console.log(bar.charAt(i));
	}
	console.log(i); //Reference Error
}

foo();

//if it said var i on line 3 then i is attached to function
//if we do let i it attachs to for loop hijacks the scope 

function foo(bar){
	if (bar){
		if (baz) {
			let bam = baz;
		}
		console.log(bam); //err
	}
		console.log(baz); //err
}
foo('bar');
//reason that it wont console.log here is that the let keyword puts it into that if statement scope
//allows us to put variable to as close as possible to where its needed that way not reused 
//in summary var will be open to entire function where let is only in that scope. some people say get rid of all var for let but probly see both

