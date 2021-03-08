function Pizza(size, style, toppings, cost) {
  this.size = size;
  this.style = style;
  this.toppings = toppings;
  this.cost = cost;
}

Pizza.prototype.sizeFinalCost = function() {
  if (this.size === "personal") {
    return this.cost = 1;
  } else if (this.size === "small") {
    return this.cost = 2;
  } else if (this.size === "medium") {
    return this.cost = 3;
  } else if (this.size === "large") {
    return this.cost = 4;
  } else {
    return this.cost = 5;
  }
}

Pizza.prototype.styleFinalCost = function() {
  let addCost = parseInt(this.cost);
  if(this.style === "hand") {
    this.cost = addCost + 2;
  } else if(this.style === "deep") {
    this.cost = addCost + 4;
  } else if(this.style === "brooklyn") {
    this.cost = addCost + 3;
  } else if(this.style === "thin") {
    this.cost = addCost + 1;
  } else {
    this.cost = addCost + 5;
  }
  return this.cost;
}

Pizza.prototype.toppingsCost = function(indexLength) {
  let addCost = parseInt(this.cost);
  for (let i=0; i < indexLength; i++) {
    addCost += parseInt(this.toppings[i]);
  }
  return this.cost = addCost;
}



$(document).ready(function() {
  $("#makePizza").click(function(event) {
    event.preventDefault();
    $("#welcome").hide();
    $("#pickPizza").show();
  });

  $("form#toppings").submit(function(event) {
    event.preventDefault();
    let toppingsPicked = [];
    let indexLength = 0;
    
    const sizes = $("input:radio[name=sizes]:checked").val();
    const styles = $("input:radio[name=styles]:checked").val();
    $("input:checkbox[name=whatToppings]:checked").each(function() {
      toppingsPicked.push($(this).val());
      indexLength++;
    });
    let newPizza = new Pizza(sizes, styles, toppingsPicked, 0);

    newPizza.sizeFinalCost();
    newPizza.styleFinalCost();
    newPizza.toppingsCost(indexLength);
    $("#pickPizza").hide();
    $("#pricePizza").show();
    $("#finalCost").append("$" + newPizza.cost + ".00<br>");
  });


  $("#cancelOrder").click(function(event) {
    event.preventDefault();
    $("#pricePizza").hide();
    $("#welcome").show();
  });
    
  $("#orderPizza").click(function(event) {
    event.preventDefault();
    $("#pricePizza").hide();
    $("#ordered").show();
  });
});
   