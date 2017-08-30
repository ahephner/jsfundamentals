//this is about functions ability to use variables based off where they are called
////lexial refers to the location of variables when called to determine were the variable is available
//Functions that are nested have have access to variable declared in their outter scope

//below is an example from MDN

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();

//does not run on this console however working on mdn website 
