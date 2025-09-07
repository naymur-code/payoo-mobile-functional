// function to get input value number
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputValue = parseInt(inputField.value);
  return inputValue;
}

//  function input value
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  return inputValue;
}

// add money feature
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const balance = parseInt(document.getElementById("balance").innerText);

    const bank = getInputValue("bank");
    const account = getInputValue("account-number");
    const addAmount = getInputValueNumber("add-amount");
    const pinNumber = getInputValueNumber("pin");

    // validation
    if (account.length < 11) {
      alert("invalid account number!");
      return;
    }

    if (pinNumber !== 1234) {
      alert("invalid pin!");
      return;
    }

    const totalBalance = balance + addAmount;

    document.getElementById("balance").innerText = totalBalance;
  });

//   cash out feature
document.getElementById("withdraw").addEventListener("click", function (event) {
  event.preventDefault();
  const account = getInputValue("account");
  const amount = getInputValueNumber("amount");
  const pin = getInputValueNumber("cash-out-pin");
  const balance = parseInt(document.getElementById("balance").innerText);
  // validation
  if (account.length < 11) {
    alert("invalid account number!");
    return;
  }

  if (pin !== 1234) {
    alert("invalid pin!");
    return;
  }

  const totalBalance = balance - amount;
  document.getElementById("balance").innerText = totalBalance;
});

//   toggling feature
const addMoneyForm = document.getElementById("add-money-form");
const cashOutForm = document.getElementById("cash-out-form");

document.getElementById("add-money-btn").addEventListener("click", function () {
  cashOutForm.style.display = "none";
  addMoneyForm.style.display = "block";
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
  cashOutForm.style.display = "block";
  addMoneyForm.style.display = "none";
});
