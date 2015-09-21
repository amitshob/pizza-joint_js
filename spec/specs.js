describe('Pizza', function() {
  it('creates a new pizza with the given attributes ', function() {
    var testPizza = new Pizza(2,["cheese","veggies"], "small");
    expect(testPizza.quantity).to.eql(2);
    expect(testPizza.toppings).to.eql(["cheese","veggies"]);
    expect(testPizza.pizzaSize).to.equal("small");
  });

  it('returns the total cost of the order', function() {
    var testPizza = new Pizza(2, ["cheese","veggies"], "small");
    expect(testPizza.cost()).to.equal(16);
  });
  
});
