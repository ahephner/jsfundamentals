// A do while loop executes a speicfic statement unitl the test condition 
// evaluates to false. The condiditon is evaluated after runing through
// code block. Runs at least once. Becarefull as it can cause infinite loop if conditions do go false

// Syntax
do 
statement
while(condition);

var result = '';

var i=0;

do {
	i +=1;
	result =+ i + '';

}while (i<5);

console.log(result);