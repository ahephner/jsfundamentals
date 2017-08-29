$(document).ready(function(){




	$.ajax({
		type: 'GET',
		url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
	}).done(function(data){
		console.log(data)
		data.forEach(function (a){
			$('#author').append('<h1>' + a.title + '</h1>');
			$('#quote').append('<p>' + a.content +'</p>');
			// $('#link').append('<h3>' + a.link + '</h3>');
		})

		})
	})
	
	




// 		$(searchName).on('click', function(){
// 			let search = $(searchRes).val();



// TRYING TO ADD SEARCH FUNCTION BELOW
// 	$.ajax({
// 		type: 'GET',
// 		url: 'https://lcboapi.com/products?access_key=MDo3MDc5OWRmYy04YzFmLTExZTctYTUxNC0zYmJmZDRkOWM0MzI6RHZHbGI0QjhSMWVsWGFjYW9KZ0kyakx3a244WFgyRWl3cmpO'
// 	}).done(function(data){
// 		$("#searchResult").html("")
// 		 for (let d in data.results [0]){
// 		 	let dataName = '<h3 class="searchRe">' + d + ':</h3>'
// 		 	$(searchResult).append(dataName + "<p>" + data.results[0][d] + "</p>")
// 		 }
		

// 		})

// })



	
	

	
