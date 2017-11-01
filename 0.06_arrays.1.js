//Arrays
//a variable that holds a lot of data in one place does not have to be all one data type

let students = ['Thomas', 'Madyson', 'brandon', 'leon', 30, true, ["jackson", "perry"]];
console.log(typeof(students));

console.log(students[2]);
//grab nested array and grab perry then print to console Hello perry

console.log("Hello" +""+ students[6][1] +""+ "man.");

//print off food items
let arrOfFood = ["quesadilla", "pecan Pie", "potato", "cheeseCake", "Shrimp Pasta",78];

//replacing item index of item, how many to cut, what you want to replace with first number is start here delete the next number i indicate of items then add item
//here .splice(0,1); would start at zero and move to Pecan Pie deleting Quesadilla and since we have nothing to replace it will not replace Quesadilla. 
// arrOfFood.splice(1,1,"blueberry"); 
// arrOfFood.splice(2, 0, "Sweet"); 
// arrOfFood.splice(4,2);

//remove last item .pop()
// arrOfFood.pop(); 
// //adding item push()
// arrOfFood.push('food');

// for(let i in arrOfFood){
// 	console.log(arrOfFood[i]);
// }

//Of prints out value instead of index number
// for(let f of arrOfFood){
// 	console.log(f);
// }


//this does exactly what the loop above does it will run through the array and retrieve data out of it. 
// arrOfFood.forEach(function(foodItem) {
// 	console.log(foodItem);
// })

//if you have something in the second parameter you  will get the index back. Does not matter the name each spot in the parameter has a specific job. Great way to 
//go over data set and splice out or add in new products. First position is value i.e. what is in the array. second position is the index. the 3 is the array
arrOfFood.forEach(function(foodItem){
	console.log(foodItem[0]);
	
})
