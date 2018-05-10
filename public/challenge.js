$(document).ready(function(){
	$("body").append("\
	<div class=\"cover\" id=\"coverjs\">\
	<div class=\"newsletterbox\">\
		<h1>Sign up to our newsletter!</h1>\
		<div class=\"form\">\
			<label><strong>Your Name</strong></label><br />\
			<input type=\"text\" id=\"namejs\" name=\"name\" placeholder=\"Name\"></input><br /><br />\
			<label><strong>Your email address</strong></label><br />\
			<input type=\"email\" id=\"emailjs\" name=\"email\" placeholder=\"Email\"></input><br /> <br />\
			<button id=\"buttonjs\" class=\"button\">Signup</button>\
		</div>\
	</div>\
</div>");
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