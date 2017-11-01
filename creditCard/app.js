var creditCard = prompt("¡Hi! Enter you card number");

var cardValid = function (creditCard) {
  if (creditCard.length < 16) {
    alert("Number invalid. Enter 16 digits");
    return false;
  }
};

var reverseArray = Array.from(creditCard).reverse();

var total = 0;

for (var i=0; i < reverseArray.length; i++){
  if ((i + 1) % 2 === 0) {
    reverseArray[i] = reverseArray[i]* 2;

  if (reverseArray[i] >= 10) {
    reverseArray[i] = reverseArray[i] - 9;
   }

  }
  total += parseInt(reverseArray[i]);
}
