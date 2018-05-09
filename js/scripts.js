//business interface logic
var number;

function condition() {
  for (var count= 1; count <= number; count ++) {
    if (count % 15 === 0) {
      $("#result").append("<li>" + "pingpong" + "</li>");
    } else if (count % 5 === 0) {
      $("#result").append("<li>" + "pong" + "</li>" );
    } else if (count % 3 === 0) {
      $("#result").append("<li>" + "ping" + "</li>");
    } else {
      $("#result").append("<li>" + count.toString() + "</li>");
    }  
  }
}

//user interface logic

$(document).ready(function() {
  $("form#LVK").submit(function(event) {
    number = parseInt($("#plp").val());
    $("#result").text("");
    condition();
    $("#result").show();
    $("#plp").val('');
    event.preventDefault();
  });
});
