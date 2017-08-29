$(document).ready(function(){
	beerList = []

	$.ajax({
		type: 'GET',
		url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
	})

	
	$.ajax({
		type: 'GET',
		url: 'https://lcboapi.com/products?access_key=MDo3MDc5OWRmYy04YzFmLTExZTctYTUxNC0zYmJmZDRkOWM0MzI6RHZHbGI0QjhSMWVsWGFjYW9KZ0kyakx3a244WFgyRWl3cmpO'
		}).done(function(data){
			data.result.forEach(function(beer){
				let newBeer = {
					name: beer.name,  //creating a value in new object to store what the element we want. In this case the API had an array that had name. so beer.name grabbed the name beer came from the function. It was the parametere we pushed through. 
					origin: beer.origin,  //creating a value for origin again we made up the name origin: beer.origin is from pass the parameter beer through .forEachfunction
					varietal: beer.varietal  //creating a value for varietal. Again we can console.log at any point and see if we are grabbing by console.log(beer.varietal)
				}
				beerList.push(newBeer)		//pushing elements from function to created array outside the function. 
			})
	}).done(function(){
		beerList.forEach(function(beer){

			let tr = document.createElement('tr')  //creating a new table row
			let name_td = document.createElement('td')  //creating a table data under notice name origin_td
			let origin_td = document.createElement('td')
			let varietal_td = document.createElement('td')

			name_td.innerHTML = beer.name  
			origin_td.innerHTML = beer.origin
			varietal_td.innerHTML = beer.varietal

			tr.appendChild(name_td)  //adding name_td to tr
			tr.appendChild(origin_td)
			tr.appendChild(varietal_td)

			console.log(tr)
			// document.querySelector('#beerTable').appendChild(tr) //vanilla javascript

			$('#beerTable').append(tr) // Jquery method
		})
	})




})