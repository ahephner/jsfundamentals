// $(document).ready(function(){
// 	let names; 
// 	$.ajax({
// 		type:'GET',
// 		url: 'http://rest.learncode.academy/api/learncode/javascriptfall'
// 	}).done(function(data){
// 		names = data
	
// 	})

	

// 		// to get name and email from index.html

// 		$(submit).on('click',function(){
// 			let person = {
// 				name: $(usr).val(),
// 				email:$(email).val()
// 			}
// 	$.ajax({
// 		type: 'POST',
// 		 url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
// 		 data: person
// 	}).done(function(info){
// 		console.log(info);
// 	})

//  })

// })		

// the above is from in class work along its html is commented out on index.html

let $friends = $('#friends');
let $name = $('#name');
let $age = $('#age');

let friendTemplate = "" +
"<li>" +
"<p><strong>Name:</strong> {{name}}</p>" +
"<p><strong>Age:</strong> {{age}}</p>" +
"<button id= '{{id}}' class='remove'>x</button>" +
"</li>"

function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
};


$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
		success: function(friends){
			$.each(friends, function(i, friend){
				addFriend(friend);
			});	
		},
			error: function(){
				alert('error loading friends');
			}
	});

	$('#add-friend').on('click', function(){

		let friend =  {
			name: $name.val(),
			age: $age.val()
		};

	$.ajax({
		type: 'POST',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
		data: friend,
		success: function(newFriend){
			addFriend(newFriend);
		},
		error: function(){
			alert('error saving order');
		}
	});

    });

		$friends.delegate('.remove', 'click', function(){
			var $li = $(this).closest('li');
			$.ajax({
				type: 'DELETE',
				url: 'http://rest.learncode.academy/api/learncode/javascriptfall' + $(this).attr('id'),
				success: function(){
					$li.fadeOut(300, function(){
						$(this).remove();
					});
				}
			});

		});

});










