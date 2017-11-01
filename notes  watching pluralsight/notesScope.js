//Following are from PluralSight videos: https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m2&clip=3&mode=live
//PluralSight Title: Advanced JavaScript Teacher: Kyle Simpson 

//Scope where to look for things
//what are we looking for var
//whose doing the looking?  The COMPILER we send orginial source compiled everytime its run
//the difference of the compiled vs interpeted
//Interpeted litterally goes line by line reads line 3 no idea what on 5
//Compiled does intial pass through code to gather then another then finally another and interpets so it has looked at both line 4 and 39 
//Compilor blocks of function scope it looks for. 
//Smallest automic unit of scope is function


var foo = "bar";

function bar () {
	var foo = "baz";
}

function baz(foo) {
	foo = "bam";
	bam = "yay";
}

//var foo = "bar"; JavaScript does not see this as a single statment. 
//JavaScript pass through above code a couple times finding:
//pass a= i see a variable decleration for an identifier called foo in "global scope" ok add it to my golbal scope
//pass a cont.= i see function  called bar add to global scope inside of bar i see var of bar
//pass a cont.= i see a function called baz add to global scope. inside i see an argument a named variable so hey scope of baz i see a variable call foo you need to register him there no more variables because bam was not declacred before the compiler went through function baz
//pass a finished= we are now done compilling for scope 


//pass b=executing theres no more var anymore he was handled in the compiling whats left foo ="bar";
//LHS: Left Hand Side-of an assignment in our language is the = so foo is a LHS
//RHS: Right Hand Side-right of an assignment "bar"

//LHS: Target "foo"
//RHS: Source "bar"
//So when i have an LHS JavaScript pass b asks global scope manager from pass a " hey i have a lhs of foo have you heard of it"
//Global says yes it was declared prior
//Executor says great lets take this lhs to the target and pass in the source

//ok executor on pass b is in function bar () sees a lhs called foo = and asks hey function bar compilor do you know foo?
//important function bar compillor (aka local scope) says yes you just declaired him 
//executor says great and hands off RHS

//executor goes in baz(foo) sees a lhs called foo and asks baz compilor if we know it
//executor gets confirmation from baz compillor (aka local compilor) because its in the params as (foo) then gives lhs the assigned RHS

//JITS=Just In Time Compilor

//this is were it gets tough on bam = 'yay'

//executor asks scope of baz I have a LHS of bam do we know him 
//answer back NO
//because the executor can get a scope to match locally it goes out of the function looking on a global area
//Hey Global Scope i have an lhs of bam do you know him
//Global says yes just did (aka as executor told me about him i made him)
//Since its an LHS reference Global trys to help and makes a global variable and know we refer to it as a global var
//But since its now golbal and we intended it to be local it is open to other functions and can leak

//To declar need a var somewhere or a function somewhere with out its undeclaired
//Unable to find a proper LHS reference in anyscope we have access too
//Undeclared when no present declaration in an scopes has a space
//Undefined was declared but has mistaken missing value. 


//above first three videos

//if function is the first word in the statment 
//expressions are annonmous functions
//named expression var foo = function bar(){ bar binds to function creates a name

//3 negatives to annonomos functions 
//1 you have no way to refer to yourself inside of the function
//2 they dont work well with debugging you cant find it because no name
//3 self documents code

//in try catch function catch is a blocked scope only can use var in catch clause not outside of it

//lexical scope perdominate scope that was for above info
//lexical like going up a floor if you dont find the var in that level until you reach top level akak global

 //ways to cheat lexical scoop

 //use the eval key word 
//the eval key word thats string and cheats it as a variable

// var bar ="bar";

// function foo (str){
// 	eval(str);
// 	console.log(bar);
// }

// foo("var bar = 42;");

//when you start cheating it slows down javascript wont do optiminzation	

//with keyword

// obj.a=obj.b + obj.c;
// obj.c=obj.b - obj.a;
//with (obj){
// 	a=b+c;
// 	d=b-a;
// 	d=3;//??
// }



