//a promise is an object that represents a task
//that will be completed in the future

//like at a deli when you get a paper ticket
//that ticket is your promise to be served eventually

var p1 = new Promise(function( resolve, reject){
    resolve([1,2,3,4])
});
//callback will be invoked once resolve is invoked
p1.then(function(arr){
    console.log("Promise p1 resolved with data", arr);
})

//reject
//this consoles "Promise p1 has been rejected with data: error"
//since the promise was rejected it grabs the string in the promise and adds it to our
//.catch callback
//.catch is for when reject is invoked inside the promise
var p1 = new Promise(function( resolve, reject){
    reject("error");
});
p1.then(function(data){
    console.log("Promise p1 resolved with data", data);
}).catch(function(data){
    console.log("Promise p1 has been rejected with data:", data);
})


//Example of a 50/50 chance of resolved or rejection
var test = new Promise(function(resolve, reject){
    var num = Math.random();
    if(num <.5){
        resolve(num)
    }else{
        reject(num)
    }
}).then(function(result){
    console.log("Resovled", result);
}).catch(function(error){
    console.log("Error", error);
});


//Wrap setTimeout with Promise

//because var promise is created right away we can attach the .then to it
//the setTimeout will run next after .then is attached to promise
//then have to wait 4 secs till resolve can be found

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        var randomInt = Math.floor(Math.random() *10);
        resolve(randomInt);
    }, 4000)
    })
    promise.then(function(data){
        console.log("random int passed to resolve:", data);
    }); 

    //with a catch
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var randomInt = Math.floor(Math.random() *10);
            if(randomInt>=10){
               resolve(randomInt);
            } else{
                reject(randomInt);
            }
        }, 4000)
        })
        promise.then(function(data){
            console.log("random int passed to resolve:", data);
        }).catch(function(error){
            console.log("too low", error);
        });