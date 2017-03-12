var yourpizza = "";

function newList(order) {
  yourpizza = yourpizza + order;
  document.getElementById("userOrder").innerHTML = yourpizza;
}
newList("")

var pizzaTotal = 0;

function updateTotal(cost) {
  pizzaTotal = pizzaTotal + cost;
  document.getElementById("pizzaTotal").innerHTML = pizzaTotal;
}
updateTotal(0)
document.getElementById("bellpepper").onclick = function() {
  updateTotal(2);
  newList("Bell Pepper");
};
document.getElementById("pepperoni").onclick = function() {
  updateTotal(3);
  newList("Pepperoni");
};
document.getElementById("mushroom").onclick = function() {
  updateTotal(1)
  newList("Mushrooms");
};
document.getElementById("clear").onclick = function(){
    pizzaTotal = 0;
    yourpizza = "";
  newList("");
  updateTotal(0);
  console.log("testclear")
};
