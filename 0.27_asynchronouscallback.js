// p5 version
// pass path or url then use call back in this case gotData = callback 
// the callback function needs to be able to handle the data coming in


// loadJSON(url, gotData);


//pass a parameter into function and the data will be stored there


//global var to allow us to grab data from our api call 
var spaceData; 

function setup(){

//so this gets the data from url, got data is the callback to handle data, "jsonp" is a way to get data may not need it. 
loadJSON("http://api.open-notify.org/astros.json", gotData, "jsonp");

function gotData(data){
spaceData = data;
}

function draw(){
	background(0);
	//since data takes time to load this is saying dont write till loaded
	if(spaceData){
		for (var i =0; i<spaceData.number; i++){
			fill(255);
			ellipse(random(width), random(height), 16 16);
		}
	}
}

}











// what the data coming in looks like

{"number": 6, "message": "success", "people": [{"name": "Sergey Ryazanskiy", "craft": "ISS"}, {"name": "Randy Bresnik", "craft": "ISS"}, {"name": "Paolo Nespoli", "craft": "ISS"}, {"name": "Alexander Misurkin", "craft": "ISS"}, {"name": "Mark Vande Hei", "craft": "ISS"}, {"name": "Joe Acaba", "craft": "ISS"}]}