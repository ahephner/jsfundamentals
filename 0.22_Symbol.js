// new both a data type and a function

//Data type
// this is anonomous and non-enumerable
//think of intger 42 it can be added to subtracted , etc
//symbol data type can not do anything

//created by invoking its function Symbol();

// syntax: 

var myPrivateInfo = Symbol();
this[myPrivateInfo] = function(data){};

//why this is good is because its non-enumerable it can be looped 
//over or pulled from an array with Object.getMyPrivateInfo();

//great for creating custom class where you dont want info to come back

