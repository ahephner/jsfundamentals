//setInterval
//setInterval(callback, repeatinterval)
//will continue to recall as time goes by

var num = 0;

setInterval(function(){
    num ++; 
    console.log(num);
}, 1000)

//cancel interval
var num = 0;

var countId = setInterval(function(){
    num ++; 
    console.log(num);
    if(num === 10){
        //grab interval id and then clearInterval stops it
        clearInterval(countId);
        console.log("done counting");
    }
}, 1000)


//challenge create a function that prints "timer: 10" "timer: 9" etc 
//and "RING RING RING" at 0 then stops counting 
function countDown(time){
   var run = setInterval(function(){
        time--;
        console.log("Timer: "+ time);
        if(time === 0){
            clearInterval(run);
            console.log("Ring Ring Ring");
            
        }
    }, 1000);

}

countDown(5);