//key word if 
// else is a fail safe word often associated with if statement. This is a back up so if statement is false it will run 
// be kind to others when writing indent/nest code lines
// anytime you know your going to use a if, while, for go ahead and put all the parts out there before ie if () {};



/* 
Chaining conditional operators
&& = both are true
|| = on can be true


var name = "kenn";
if ("Kenn" == name) {
	console.log("Hey your name is" + name);
} else {
 console.log("whats your name?")
};
*/
//challenge
//create an If statment that checks if the users name does not have a capital leter, 
//Rebuild their name with that capital letter

var userName = "dave"

if (userName[0] === userName[0].toUpperCase()){
		  console.log(userName);
	} else {
		console.log(userName[0].toUpperCase() + userName[1] + userName[2] + userName[3]);
	}

//else if: for checking multiple conditions
//multiple answers
//stops once its true on on statement so in scenerio below if age is 23 you will read you can vote and that is all. it quites after it is true. order matters!!!!
var age = 17
if (age >= 18){
	console.log("You can vote")

	}else if( age>= 21){
		console.log ("you can drink")

	}else if(age>=25){
		console.log("rental driver...ok")
	}else{
		console.log("too young")
	}

	