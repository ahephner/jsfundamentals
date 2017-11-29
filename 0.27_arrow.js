//new to es6 

// imagine this was in a codebank not supposed and this is the 
// old way too pass a function in as a call back 
let button = createButton('press');
button.mousePressed(changeBackground);

function changeBackground(){
	background(random(255))
}

//now with arrow

let button = createButton('press');
button.mousePressed(()=>background(random(255)));

///////////////////////////////////////////////////////////////



class counter{
	constructor (){
		this.count = 0;
		this.p = createP('');
	}

	countIt(){
		this.count++;
		this.p.html(this.count); 
	}
}