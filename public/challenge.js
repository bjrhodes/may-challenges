$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/analytics",
    data: JSON.stringify({url:"http://localhost:8080/challenge.html"}),
    contentType: 'application/json'
   });
});