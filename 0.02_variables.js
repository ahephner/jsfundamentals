// Variables one = is called assignment operator As data is put into a variable the data type is transfered to the variable. All of it's operations also transfer to variable
// like string into a variable you can do name.lenght or name.toUpperCase

var name; 

name = "Madyson";

console.log(typeof(name));
console.log(name);

var lastName = "Ward";
console.log(name.length);

//create 3 variable "firstName" and "lastName" and concat them 
//together third variable called fullName is printed out
//the + " "  +
//JavaScript reads line bye line so if I had console.log(lastName) here out put would be Ward not Hephner because Ward is above this lastName
var firstName = "Jackie";
var lastName = "Hephner";
var fullName = firstName + " "+ lastName

console.log(fullName);
//Module
var myDog = "kliff klifferson";
var myPhone = 9376549676;
var myAge = 30;
var myHouse = 7910;
var myJersery = 12;

console.log(myDog +" "+ "Lives at " +" "+ myHouse);
console.log("Hey you called" +' '+ myPhone);
console.log("He said you're "+' '+ myAge +' '+ myJersery);

var myNumber = 0
console.log(myNumber + 10);
console.log(myNumber +10 -1);
console.log(myNumber + 10 -1 *9);
console.log(myNumber + 10 -1 *9/7);
console.log(myNumber + 10 -1 *9/7);

var maxAge = 65;
var estPerDay = 4; 

console.log("You will need" +" "+ (maxAge-myAge)*estPerDay +" "+"cups of tea to last you unilt the ripe old age of 65"); 
//Variable  data types


//Variable scopes