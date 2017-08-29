//this method rturns a live HTMLCollection of elements within a given tag name

//puts its argument in lower case before proceeding. In this
//case where case is important call .getElementsByTagNameNS()

//this beleow will check alignment on a number of cells in a table

var table = document.getElementByID('forecast-table');
var cells = table.getElementByID('td');

for (var i =0; i<cells.length, i++){
	var status = cells[i].getAttribute('data-status');
	if ( status == 'open'){


	}
}

//Only starts on called element and decendents. IE <td> lowest level called on table
//No need to call more than once with same elements and arguments
