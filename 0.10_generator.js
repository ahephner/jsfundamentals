//Returned by a generator function. 

//Syntax-notice the special character

// function* gen() {

// 	yield 1;
// 	yield 2; 
// 	yield 3; 
// }

// var g = gen(); 

'example'

function* testOut(){

	var index = 0;
	while(true)
		yield index++;
}

var gen = testOut();

console.log(gen.next().value); //starts on zero
console.log(gen.next().value);//output one 


'example 2'

function* testOut(){

	var index = 2;
	while(true)
		yield index++;
}

var gen = testOut();

console.log(gen.next().value); //starts on zero
console.log(gen.next().value);