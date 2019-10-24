$(document).ready(function() {
  var age = parseInt(prompt("Please enter your age:"));

  if (age >= 21) {
    $('#twentyOne').show();
} else {
    $('#under-21').show();
  }
});
