function Pizza(quantity, toppings, pizzaSize){
this.quantity = quantity;
this.toppings = toppings;
this.pizzaSize = pizzaSize;
};

Pizza.prototype.cost = function() {
  var total_cost = 0;
  if (this.pizzaSize === "small") {
    total_cost = this.quantity*((6 + (this.toppings.length)*1));
  } else if (this.pizzaSize === "medium"){
    total_cost = this.quantity*((8 + (this.toppings.length)*1));
  } else if (pizzaSize === "large") {
    total_cost = this.quantity*((10 + (this.toppings.length)*1));
  }
  return total_cost;
};
