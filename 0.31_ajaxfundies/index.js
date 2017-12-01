//fully supported 
//3rd party lib

//3 AJAX methods

//$.ajax - key one
//$.get
//$.post
//$.getJSON


$("#btn").click(function(){
    $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        //do not need below it will know it's json
        //using to be sure
        datType: 'json'
    })
    .done(addP)
    .fail(function(){
        alert('o no it failed');
    })
 })
 //target p tag then add the data
 //data comes back as an array
 function addP(data){
     $('p').text(data[0]);
 }
 
 //shorthand getJSON method
 $('#getJSON').click(function(){
     $.getJSON('http://api.github.com/users/ahephner')
     .done(function(data){
         console.log(data);
     })
 })
 
 //shorthand get method
 $('#get').click(function(){
     $.get('http://api.github.com/users/ahephner')
     .done(function(info){
      console.log(info)
     })
  })
 
  var data = {city: "indy",
  name: 'AJ'}
  
  //shorthand post method
  $('#post').click(function(){
      $.post('www.urlthatacceptspost.com', data)
      .done(function(data){
          console.log("hello");
      })    
      .fail(function(){
          console.log('error')
      })
  })
 
 //cat pic challenge
 
 $('#cats').click(function(){
     $.get('https://random.cat/meow')
     .done(changeCat)
     .fail(function(){
         console.log("error");
     })
 })
 //.attr change the attribute
 //can change multiple
 function changeCat(data){
     $('#pic').attr('src', data.file);
 }
 //simple get request
 
 // $.ajax({
 //     method: "GET",
 //     url: "Some Url",
 // })
 // //runs when request comes back success
 // .done(function(res){
 //     console.log(res);
 // })
 // .fail(function(){
 //     //run
 // })
 
 // //Post Request
 // $.ajax({
 //     method: "POST",
 //     url: "sample.api.com",
 //     data: {
 //         name: "AJ",
 //         address: "123 Street"
 //     }
 // })
 // .done(function(msg){
 //     alert("saved " + msg);
 // })