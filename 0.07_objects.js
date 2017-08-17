//seperate properities in an object with , 
let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
	pieNames: [],
	getPies: function(){
		return this.pies;				//this.referring to the object itself so we know this object has pies so we are saying grab this pie. This is normal on how you would call data in JavaScript sort of helps protect data
	},
	//2
	addPie: function(){
		return this.pies.forEach(function(newP){
			console.log([newP]+ ' pie')
		});
	},
//3  			
	getPieNames: function(){
		this.pies.forEach(function(pie){
			food.pieNames.push(pie+ ' pie');
		}
			)
			return this.pieNames 
		}
	}

}
console.log(food.getPieNames());
//print out pecan
// console.log(food.pies[0]);

//1:challenge iterate over the pie array and print out each, add 'pie' at  the end using the forEach()

// food.pies.forEach(function(x){
// 	console.log(x + " pie");
// })
food.addPie();
//2: create a method inside of the object that appends " pie" to the different pies on the array
//3:create a method that adds the pies to a new array in the food object