let userInput = document.getElementById("userInput");
let getCurrency = document.getElementById("currencySelect");
let result;

function calculateCurrency() {
  console.log(userInput.value);
  switch (getCurrency.value) {
    case "SEK":
      result = userInput.value * 0.087;
      console.log(result);
      document.getElementById("result").innerHTML = "EUR " + result.toFixed(2);
      break;
    case "EUR":
      result = userInput.value * 11.49;
      console.log(result);
      document.getElementById("result").innerHTML = "SEK " + result.toFixed(2);
      break;
  }
}
