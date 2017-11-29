//setTimeout
//syn setTimeout(callback, delay)

setTimeout(function(){
    console.log("run in approx. 2000ms ");
}, 2000);

//canceling setTimeout

var timerId= setTimeout(function(){
    console.log("run in 30 seconds");
}, 30000);

setTimeout(function(){
                                //pass timerId to get integer
    console.log("run in 2 secs", timerId);
   //this cancels first setTimeout
    clearTimeout(timerId);
}, 2000);