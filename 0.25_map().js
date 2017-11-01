//stupid error at first with this array dont forget correct notaion with
// , and :  in right spot

var test = [
{name: 'AJ', food: 'Jetts pizza'},
{name: 'Jackie', food: 'Olive Garden'},
{name: 'Kliff', food: 'Everything'},
{name: 'BB', food: 'French Fries'}
];

//using teh test array we want to map through it to create a new array
//the (i) allows me to step through the array and grab that value
var foodtype = test.map(function(i){
	//the return gives the value back to the function
	return i.name + " " + "my favorite food is" +' ' + i.food;

});

console.log(foodtype);

//allows you to call specific run as well 

console.log(foodtype[2]);


//could do a for loop but its more code more chances of error!

var array2=[]
for(let i = 0; i<test.length; i++){
	array2.push(test[i].name);
}

console.log(array2);