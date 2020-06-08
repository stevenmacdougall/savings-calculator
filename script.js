//Calculator compare rates
function compareRate() {
  var currentNumPerMonth = document.getElementById("currentNumPerMonth").value;
  var rateCup = document.getElementById("rateCup").value;

  //validate input
  if (currentNumPerMonth === "" || rateCup == 0) {
    alert("Please enter values");
    return;
  }

  //Calculate current amount spent per month.
  var savingsTotal = (currentNumPerMonth * rateCup);
  //round to two decimal places
  currentTotal = Math.round(savingsTotal);
  //next line allows us to always have two digits after decimal point
  currentTotal = currentTotal.toFixed(2);
  //Display current amount
  document.getElementById("currentAmountTotal").style.display = "block";
  document.getElementById("current").innerHTML = currentTotal;


  //Calculate current amount and minus our montly rate to find montly savings total.
  var savingsTotal = (currentNumPerMonth * rateCup) - 25; // This is where you put your monthly rate.
  //round to two decimal places
  savingsTotal = Math.round(savingsTotal);
  //next line allows us to always have two digits after decimal point
  savingsTotal = savingsTotal.toFixed(2);
  //Display the tip
  document.getElementById("savingsAmount").style.display = "block";
  document.getElementById("savings").innerHTML = savingsTotal;
}

//Hide the savings amount on load
document.getElementById("currentAmountTotal").style.display = "none";
document.getElementById("savingsAmount").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  compareRate();
};