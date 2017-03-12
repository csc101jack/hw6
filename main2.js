var yourpizza = "";

function newList(order) {
  yourpizza = yourpizza + order;
  document.getElementById("userOrder").innerHTML = yourpizza;
  
}
newList("")

var pizzaTotal = 0;
var tax = 0;
var fprice = 0;

function updateTotal(cost) {
  pizzaTotal = pizzaTotal + cost;
  tax = tax + (pizzaTotal*0.12);
  fprice = tax + pizzaTotal;
  document.getElementById("pizzaTotal").innerHTML = pizzaTotal;
  document.getElementById("tax").innerHTML = tax;
  document.getElementById("test").innerHTML = fprice;
  //alert("Total Price Is:" + fprice);
 // return pizzaTotal;

}
 

updateTotal(0);
//totalTax(0);
document.getElementById("bellpepper").onclick = function() {
  updateTotal(2);
  newList("Bell Pepper");
  //totalTax(1);
  //finalprice(tax,pizzaTotal);
};
document.getElementById("mushrooms").onclick = function() {
  updateTotal(1);
  newList("Mushrooms");
  //totalTax(1);
  //finalprice(tax,pizzaTotal);
};
document.getElementById("pepperoni").onclick = function() {
  updateTotal(3)
  newList("Pepperoni");
  //totalTax(2);
 // finalprice(tax,pizzaTotal);
};

document.getElementById("clear").onclick = function(){
    pizzaTotal = 0;
    yourpizza = "";
  newList("");
  updateTotal(0);
  //totalTax(0);
  //finalprice(tax,pizzaTotal);
  console.log("testclear")
};
	function placeOrder() {
  
  var myString = document.getElementById("order").value;
	var Order = myString.split(",");

  for (var i=0; i<Order.length; i++) {
		Order[i] = Order[i].trim();
    if( Order[i] == "mushrooms")
    {
      updateTotal(1);
    newList("Mushrooms, ");
  }
  else if ( Order[i] == "bellpepper")
    {
      updateTotal(2);
    newList("Bell Pepper, ");
  }
  else if ( Order[i] == "pepperoni")
    {
      updateTotal(3);
    newList("Pepperoni, ");
  }

    else
      document.getElementById("userOrder").innerHTML = "topping not test available";
    
}
};







