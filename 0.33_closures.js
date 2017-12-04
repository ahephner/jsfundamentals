//Closure is a function that makes use of variables
//defined in outer functions that have previously returned

function outer(){
    var start = "closures are"

    return function inner(){
        return start + " " + 'awesome'
    }

}

// outer()() = closuers are awesome


//here innerFN would only know fact because it we put it 
//in our inner function. Inner functions only know vars that 
//are passed to them 
function outerFN(){
    var data = "from outerFN";
    var fact = "test 2"
    return function innerFN(){
        debugger
        return fact
    }
}

//this is a good way to create a private var

function counter(){
    var count= 0;
    return function add(){
        count ++; 
        return count; 
    }
}

var counter1 = count();
counter1(); 
//will add 1 to the count

var counter2 = count(); 
counter2(); 
//will not effect counter1() because they have private access
//cant reference count

function class(){
 var  students=["aj", "vern"];
 return{
     getStudents: function(){
         return students.slice();
     },
     addStudents: function(students){
         students.push(students);
         return students.slice(); 
     }
 }
}

function specialMultiply(a,b){
    if(arguments.length === 1){
      return function(b){
        return a*b;
      }
    }
    return a*b;
  }
  
  function guessingGame(amount){
      var answer = Math.floor(Math.random()*11);
      var guesses = 0;
      var completed = false;
      return function(guess){
          if(!completed){
              guesses++
              if(guess === answer) {
                  completed = true;
                  return "You got it!"
              }
              else if(guesses === amount) {
                  completed = true;
                  return "No more guesses the answer was " + answer;
              }
              else if(guess > answer) return "Your guess is too high!"
              else if(guess < answer) return "Your guess is too low!"
          }
          return "All done playing!"
      }
  }