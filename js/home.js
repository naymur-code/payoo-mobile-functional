// add money feature

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const balance = parseInt(document.getElementById("balance").innerText);

    const bank = document.getElementById("bank").value;
    const account = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("pin").value);

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
  const account = document.getElementById("account").value;
  const amount = parseInt(document.getElementById("amount").value);
  const pin = parseInt(document.getElementById("cash-out-pin").value);
  const balance = parseInt(document.getElementById("balance").innerText);
  // validation
  if (account.length < 11) {
    alert("invalid account number!");
    return;
  }

  if (pin === 1234) {
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
