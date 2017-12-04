//reserved keyword in Javascript
//cant set as a var

//1. global rule 
//in global scoop it refers to the window object
console.log(this);

//using this like it is used makes idea a global var
//which we may not want it to be 
//if "use strict" is a top of the page then idea will not be global

function badIdea(){
    this.idea = "bad";
}


//this is defined when a function is run 
//there is no function run here to create a new value of the keyword this
//so value is window

var person = {
    name: "jackie",
    lastName: this;  
}
//2 Implicit/Object
//when keyword this is used inside an object
//this will take use to the closest parent object

var dog ={
    name: "kliff",
    hello: function bark(){
        return "My dog" + this.name;
    }
}

console.log(dog.hello.bark()); //returns My dogkliff

//nested objects

var car = {
    make: "mazda", 
    myCar : function(){
        return 'I drive ' + this.make;
    },
    color: {
        carColor: function(){
            return "My black " + this.make; //will return undefined 
                                            //since it's closest parent object is carColor and make is not defined in carColor
        }
    }
}

//3. Explicit binding
//call apply or bind set value but only assignale to functions

//call thisArg, a,b,c,... invoke immediately yes
var car = {
    make: "mazda", 
    myCar : function(){
        return 'I drive ' + this.make;
    },
    color: {
        carColor: function(){
            return "My black " + this.make; 
        }
    }
}

console.log(car.color.carColor.call(car));

var chris ={
    fName = "Chris", 
    sayHello: function(){
        return "Hi " + this.fName;
    }    
}
var kelly = {
    fName = "kelly"
}

chris.sayHello(); //Hi chris
chris.sayHello.call(kelly); //Hi kelly


//apply thisArg[a,b]  invoke immediately yes
function sumValues(a, b, c){
    return a+b+c;
}
var values = [4,1,3];
sumValues.apply(this, [4,1,3]);

//bind thisArg, a, b similar to call but invoke immediately no
//usefull when you dont know all the arguments to be passed
//returns a new function

function addNum(a, b, c){
    return this.player + " scored " + (a+b+c);
}

var Jay = {
    player: "Jay"
}
var jayC = addNum.bind(Jay, 1);
jayC(2,3) //Jay scored 6

//does not go to firstName in colt obj
//setTimeout is a window method and since it accepets a call cack function
//this is a global
var colt ={
    firstName: 'Colt', 
    sayHi: function(){
        setTimeout(function(){
            console.log("hi " + this.firstName);
        }, 1000);
    }
}

//
var colt ={
    firstName: 'Colt', 
    sayHi: function(){
        setTimeout(function(){
            console.log("hi " + this.firstName);
        }.bind(this), 1000);
    }
}