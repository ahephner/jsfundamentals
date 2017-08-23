let input = document.getElementById("input");
let output = document.getElementById("output");
let ulist = document.getElementById('friendsList');
let newName="";

function capitalize(){
	
	for (let l in input.value){
		if (l == 0){
			newName=input.value[l].toUpperCase();
		}else{
			newName += input.value [l].toLowerCase();
		}
		output.innerHTML="Capitalize Name:" + newName;
		input.value="";
		addItem();

	}
}

 
// challenge: find out how to do do have a conditional taget the "enter key"
// so that once it's pressed it can submit the form 

//						happens after the event in this case onkeypress means a key pushed in and let go on the key board in ()= name of event nothing special normally see (e)
document.onkeypress	= function(e){
	if (e.keyCode === 13){
		capitalize();
	}
}


// create an un-ordered list from top function and remove bullet
// var list = document.createElement("li"); this create element method builds out elements in this case <li>


function addItem(){
	let li = document.createElement('li');
	let text = li.innerHTML = newName;
	ulist.appendChild(li);

}

