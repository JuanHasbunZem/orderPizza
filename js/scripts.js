

$(document).ready(function() {

  $("#makePizza").click(function(event) {
    event.preventDefault();
    $("#welcome").hide();
    $("#pickSize").show();
  });

  $("#pickedSizeStyle").click(function(event) {
    event.preventDefault();
    $("#pickSize").hide();
    $("#pickToppings").show();
    //function
    const sizes = $("input:radio[name=sizes]:checked").val();
    const styles = $("input:radio[name=styles]:checked").val();
  });

  
    
})