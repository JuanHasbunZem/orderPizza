function Pizza(size, style, toppings) {
  this.size = size;
  this.style = style;
  this.toppings = toppings;
}

Pizza.prototype.fullName = function() {
  return this.size + " " + this.style;
}

Pizza.prototype.sizeFinalCost = function() {
  if (newPizza.size === "personal") {
    return newPizza.cost = 1;
  } else if (newPizza.size === "small") {
    return newPizza.cost = 2;
  } else if (newPizza.size === "medium") {
    return newPizza.cost = 3;
  } else if (newPizza.size === "large") {
    return newPizza.cost = 4;
  } else {
    return newPizza.cost = 5;
  }
}

Pizza.prototype.styleFinalCost = function() {
  let addCost = parseInt(newPizza.cost);
  if(newPizza.style === "hand") {
    newPizza.cost = addCost + 2;
  } else if(newPizza.style === "deep") {
    newPizza.cost = addCost + 4;
  } else if(newPizza.style === "brooklyn") {
    newPizza.cost = addCost + 3;
  } else if(newPizza.style === "thin") {
    newPizza.cost = addCost + 1;
  } else {
    newPizza.cost = addCost + 5;
  }
  return newPizza.cost;
}

let newPizza = new Pizza(0, 0, 0);

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
    
    const sizes = $("input:radio[name=sizes]:checked").val();
    const styles = $("input:radio[name=styles]:checked").val();
    newPizza.size = sizes;
    newPizza.style = styles;
    newPizza.sizeFinalCost();
    newPizza.styleFinalCost();
  });

  $("form#toppings").submit(function(event) {
    event.preventDefault();
    $("#pricePizza").show();
    $("input:checkbox[name=whatToppings]:checked").each(function() {
      const toppingsPicked = $(this).val();
    });
    $("#pickToppings").hide();
  });

  $("#cancelOrder").click(function(event) {
    event.preventDefault();
    $("#pricePizza").hide();
    $("#welcome").show();
  });
    
});