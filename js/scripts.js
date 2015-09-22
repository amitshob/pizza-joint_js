function Pizza(quantity, toppings, pizzaSize){
this.quantity = quantity;
this.toppings = toppings;
this.pizzaSize = pizzaSize;
};

Pizza.prototype.cost = function() {
  var total_cost = 0;
  this.toppings = this.toppings.split(",");
  if (this.pizzaSize === "small") {
    total_cost = this.quantity*((6 + (this.toppings.length)*1));
  } else if (this.pizzaSize === "medium"){
    total_cost = this.quantity*((8 + (this.toppings.length)*1));
  } else  {
    total_cost = this.quantity*((10 + (this.toppings.length)*1));
  }
  return total_cost;
};

$(function(){
  $("form#pizza-selections").submit(function(event){
    event.preventDefault();

    var quantity = parseInt($("#pizza-quantity").val());
    var toppings = $("#pizza-toppings").val();
    var pizzaSize = $("select#size").val();
    var testPizza = new Pizza(quantity, toppings, pizzaSize);
    var cost = testPizza.cost();

    $("#order-cost").text(cost);
    $("#total-cost").show();

  })

})
