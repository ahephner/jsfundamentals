var url = 'https://randomuser.me/api/';
var fullnameDisp = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");
var username = document.querySelector("#username");
var city = document.querySelector("#city");
var email = document.querySelector("#email");

var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(displayErrors);
});

function handleErrors(res){
  if(!res.ok){
    throw Error(res.status);
  }
  return res;
}

//parseing the JSON gets rid of the need for .results[0]
function parseJSON (res){
  return res.json().then(function(parsedData){
    return parsedData.results[0];
  })
}

function updateProfile (data){
    var fullname = data.name.first + " " + data.name.last;
    fullnameDisp.innerText = fullname;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
}

function displayErrors(err){
  console.log("INSIDE displayErrors!");
  console.log(err);
}





//My attempt if // // means i commented it out. 
//Could change user info on screen but could not get verify request to work :(
//I forgot to pass request into the function(request)
// //user info
// var pic = document.querySelector('#avatar');
// let name= document.querySelector('#fullname');
// var title = document.querySelector('#username');
// var email = document.querySelector('#email');
// var home = document.querySelector('#city');

// //button 
// var btn = document.querySelector('#btn');

// //api

// var url = "https://randomuser.me/api/"
// var person =[];


// btn.addEventListener('click', function(){
//     fetch(url)
//     .then( function(data){
//        return data.json();
        
//     })
//     .then(function(i){
//         var firstName= i.results[0].name.first;
//         var lastName = i.results[0].name.last
//    email.innerHTML = i.results[0].email; 
//     home.innerHTML = i.results[0].location.city; 
//     title.innerHTML = i.results[0].login.username;
//     name.innerHTML = firstName + " " + lastName ;
//     pic.src = i.results[0].picture.medium;    
// console.log(i.results[0].name.first+ " " + i.results[0].name.last);

//     });

//     })

    //error for bad url 
    // fetch(url)
    // .then(function handleError(){
    //     if(!request.ok){
    //         throw Error(request.status)
    //     }
    //     return request
    // }).then(function(){
    //     console.log(request);
    // }).catch(function(error){
    //     alert('URL could not be reached ' + error);
    // })
