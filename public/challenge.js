$(document).ready(function(){
	var $buttonjs = $("#buttonjs");
	var $namejs = $("#namejs");
	var $emailjs = $("#emailjs");
	var $coverjs = $("#coverjs");
	$buttonjs.on("click", function(e){
		$.ajax({
			"url": "http://localhost:8080/newsletter",
			"method": "POST",
			"data": {
				"name": $namejs.val(),
				"email": $emailjs.val()
			}
		});
		$coverjs.remove();
	});
});