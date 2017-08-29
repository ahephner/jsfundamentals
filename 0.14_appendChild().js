//This was the method Jay used when we were creating and API 
//and assigning it to the table. 

//syntax

var i=element.appendChild(achild);

//so when we were pulling api data out and creating new variable to store the data
//you can assign it to the parent element. 

var p=document.createElement('p');

document.body.appendChild('p');

//above works because 'p' is a child element of a body tag

//another example from api work 

let tr = document.createElement('tr')//this creates the 'tr' on our table remember not to create the tr on html JavaScript will assign it . 

name_td.innerHTML = beer.name //this is assigns the beer.name api element assigned to name_td

tr.appendChild(name_td)// the td is a child element of <tr> this assigns it underneath it