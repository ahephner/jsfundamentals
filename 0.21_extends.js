// the extends keyword is used in the class declarations or class expressions to create a class whici is a child of another class
//syntax
//class ChildClass extends ParentClass {...}

class Square extends Polygon {
	constructor (length){
		//here it calls the parent class' constructo with lengths
		//provided for polygons width and height
		super(length, length);
		//Note: In derived classes, super() must be called before you 
		//can use 'this'. Leaving this out will cause a reference error. 
 	this.name='Square'		

	}

	get area() {
		return this.height * this.width;
	}
}

//Using extends with built-in objects

class myDate extends Date {
	constructor(){
		super();
	}
	getFormattedDate(){
		var months =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return this.getDate() + '-' + momnths[this.getMonth()] + '-' + this.getFullYear();

	}
}