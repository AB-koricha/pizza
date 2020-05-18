// business logic
function Pizza(size,crust,top) {
  this.size = size;
  this.crust = crust;
  this.top = top;
});
if (delivery){
  prompt('Enter where your delivery will be made');
  console.log(alert("delivery will be deliver to your location and delivery charge is $10"));
} else
console.log("thank you for being in contact with us welcome again");
});
// user interface logic
$(document).ready(function() {
  $("form#new-Pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input#new-size").val();
    var inputtedCrust= $("input#new-crust").val();
    var inputtedTop=$("input#new-top").val();



    var  newPizza= new Pizza(inputtedSize, inputtedCrust,inputtedTop);

    $("ul#Pizza").append("<li><span class='pizza'>" + newPizza.Size + "</span></li>");

    $("input#new-size").val("");
    $("input#new-crust").val("");
    $("input#new-top").val("");
  });
}); 
