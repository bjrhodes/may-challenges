$(document).ready(function() {

	$(".close-button").click(function(){
		$(".popup").remove();
	});
	$(document).keyup(function(e){
		if (e.which == 27){
			$(".popup").remove()
		}
		;
	});

	$(".newsletter").submit(function(e){
		e.preventDefault();
		var name = $(".namefield").val();
		var email = $(".emailfield").val();

		 $.ajax({
		    type: "POST",
		    url: "http://localhost:8080/newsletter",
		    data: JSON.stringify({"name": name, "email": email}),
		    contentType: 'application/json'
	   	});
		 
		 $(".popup") .remove();
	});


  $.ajax({
    type: "POST",
    url: "http://localhost:8080/analytics",
    data: JSON.stringify({url:"http://localhost:8080/challenge.html"}),
    contentType: 'application/json'
   });


});

// onlclick event on signup . 1-add listener to the click

/* $( "#other" ).click(addEventListener() {
  $( "#signup" ).click();
}); */




//what data to submit

// submit those details to the /newsletter endpoint button