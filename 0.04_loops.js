/*
{}=new code block 

for (var i=0; i<0; i++){
	console.log([i])
}																	all loops need a variable to control how we iterate over data known as LCV or loop control variable
for loop
--------------------
-uses counting tool 
-initalize var, have boolen expression; 
-always want to use < with the next number up because if your using an array of 200 data points it dont forget product 200 comes off as 199

//initialize variable
var j=0

//boolen expression
while(j<5){
	step through loop
	j=j++ 
	console.log(j)
}


while loop
-------------------------
declare LCV outside loop
give its ability to change in code block
order matters iin code block 
mostly used in gaming to contstantly check the status ie while player is alive play music a once they die play music b


for in loop
-------------------
great for collection
automatically read collection and only go that far

do while loop
--------------
-Runs at least once


*/


for(var i=0; i<0; i += 1){
	console.log(i);
}
for ( var i=0; i<22; i +=2){
	console.log(i);
}

// best practice

var name ="Kenn"

for(var i=0; i<name.length; i++){
	console.log(name[i]);
}

var j=0

while(j<5){
	j ++
	console.log(j);
}

//challenge create a while loop that counts to 100 by 10's

var challenge=0
while(challenge<100){
	challenge += 10
	console.log(challenge);
}


var studentName ="smita"; 

//	 lcv          collection
for ( var l in studentName){
	console.log(l);
}
for ( var l in studentName){
	console.log(studentName[l]);
}



var studentName="smita"

for (var l in studentName) {
	
	console.log(studentName[0].toUpperCase() + studentName[1]+ studentName[2] + studentName[3] + studentName[4]);
	break; 
}
var student= "smita"
var capSN=""
for (var l in student){
	if (l ==0){
		capSN =student[l].toUpperCase();
	} else {
		capSN += studentName[l];
	}
}