//forEach allows me to go through an array and look at different data types
//Called with dot notation as seen below

var myArray = [21, "aj", 35, 12]

//(item) allows me to grab the elements in the array during step through. 
myArray.forEach( function(item){
    console.log("this" + ' ' + item);

});

