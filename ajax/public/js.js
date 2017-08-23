$(document).ready(function(){
	alert('jQuery is working!')

});

$(document).ready(function(){
	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/planets/',
	}).done(function(data){
		// console.log(data.results[0].diameter)
		data.results.forEach(function(data){	//to iterate over an index
												//arrays returned by an api
			let tr=document.createElement("tr")
			let td=document.createElement("td")
		
			td.innerHTML=data.name

			$(planetTable).append(tr).append(td)
		})

		
		
		// for (let planet of data.results){   Also, a common way to iterate over an array
		// 	console.log(planet.name)
		// }

	})
		
})
	$(document).ready(function(){
	$.ajax({
		type:'GET',
		url: 'https://swapi.co/api/people/',
	}).done(function(data){
		// console.log(data.results[0].diameter)
		data.results.forEach(function(data){	//to iterate over an index
			let tr=document.createElement("tr")
			let td=document.createElement("td")

			td.innerHTML=data.name

			$(peopleTable).append(tr).append(td)									//arrays returned by an api
			
		})
		
		
		// for (let planet of data.results){   Also, a common way to iterate over an array
		// 	console.log(planet.name)
		// }

	})
		
})