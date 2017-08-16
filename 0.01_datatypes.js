// DataTypes: numbers, strings, booleans, arrays etc

//Strings: both '' and "" rep a string. 
console.log("What a Wonderful World".length);

console.log('Hello you guys'.toUpperCase());

//'it's a wonder' -bad because javascript ends string around 'it' to fight wrap double quotes in single "it's a great day"; vice versa 'Tom "BAD BOY" jones';
'it\'s a wonder' // the \ helps get out of the rule 

//Challenge! Create a string that has your name and use the .tolowercase() 

console.log("AJ Hephner".toLowerCase());
console.log("aj hephner".toUpperCase());

//strings are just collection of characters you can target specific characters in strings. Remember starts on 0
console.log("Jackie H." [1].toUpperCase()); 

// add things together with the + op. 

console.log("jay"[0].toUpperCase());
console.log('jay'[0].toUpperCase() + 'jay' [1] + 'jay'[2]);

// Challenge uppercase the 'm'in home put string back together

//console.log("home"[2].toUpperCase());
console.log('home'[0] + 'home' [1] + 'home'[2].toUpperCase() + 'home'[3]);

//key word typeof() tells what type of data it is: 
//Also, a great data check tool when using logic. If you were expecting a string and get numbers instead
console.log(typeof("amber")); //will print out this is a string

// Numbers and integers are the same 

console.log(typeof(5));
//JavaScript knows all operators +, -, *, / , %,
console.log(2 + 5)


//Booleans: Represented by keyword: ture and false

console.log(true) //notice console.log(True) would return error notice capitalization
/*conditional operators
< less than
> greater than
<= less than or equal too
== equal to 
=== strictly equal too not only checks value but data type as well
!	not (bang chacter)
!=  not equal to 
*/
console.log(1 == "2");
