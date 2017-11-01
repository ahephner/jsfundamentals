//Functions
//Are like a calculator put something inside get a return 
//() serve to hold parameters
//a funcition inside of a method is called a callback




function greeting(){
	console.log("Good Morning!");
}

//parenthesis invokes our function so that it runs the code inside of it
greeting();

//Challenge, create a function that says "Day 4 feeling great!" then call that function

function updates(){
	console.log("Day 4 feeling great!");
}
updates()

//functions with parameters serve as a place holder
//() allow us to pass along parameters and agruments
//var in functionns are local protected to that code block ie{}

function greeting2(name, age, height){
	console.log("Time to start coding" +" "+ name, age, height);
}

greeting2("aj", 30, 80);


function sum(num1, num2){
	console.log(num1 + num2)
}
sum(1,2);

var fname = "aj"  //fname is defined in the parameters 
function hello(fname){
	console.log('hello' +""+ fname);
}
hello();

var fname = "aj";
function hello(fname){	//Hoisting example if lname="hephner" does not have var = before JavaScript will take it and hoist it out to a global variable means rest of code can grab it
	lname="hephner";
	console.log(lname +""+ fname);
}
console.log(lname);
hello();


if (1 == 1){			//expect var to stay local but it does not this a draw back we have id'ed in JavaScript and created a new way to creatle local var called let
	var sum = 1+ 1
	console.log(sum);
}

console.log(sum);

 if (1 == 1){			//let keyword in the function keeps the sum local to the block were var above is not just local to block only really applies to if statements
	let sum = 1 + 1
	console.log(sum);
}

console.log(sum);


//create a function calledp capitalize() and use the for loop we created yesterday to capitalize name
//return tells function to stop. So putting it in next to last } tells function to run through and then stop. if it was up higher in the function it would stop it at that point.
//Console.log() is only for diagnosing issues 
//Functions serve to return value
function capitalize(studentName){
	var newName ="";
	for ( var l in studentName){
		if(l == 0){
			newName = studentName[0].toUpperCase();
		}else{
			newName+=studentName[1];
		}
	}
	return newName
}
console.log(capitalize("aj"));
//Void Functions


//If we declacre var in function we cannot call it outside of that function


//functions with parameters

