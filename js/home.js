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

// function to get innertext
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNum = parseInt(elementValue);
  return elementValueNum;
}

// function to set balance innertext
function setInnerText(value) {
  const balance = document.getElementById("balance");
  balance.innerText = value;
}

// function toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function active btn

function activeBtn(id) {
  const formBtn = document.getElementsByClassName("form-btn");
  for (const btn of formBtn) {
    btn.classList.remove("bg-gray-200", "border-green-600");
  }
  const addMoney = document.getElementById(id);
  addMoney.classList.remove("bg-gray-300");
  addMoney.classList.add("bg-gray-200", "border-green-600");
}

// add money feature
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const balance = getInnerText("balance");

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

    setInnerText(totalBalance);
  });

//   cash out feature
document.getElementById("withdraw").addEventListener("click", function (event) {
  event.preventDefault();
  const account = getInputValue("account");
  const amount = getInputValueNumber("amount");
  const pin = getInputValueNumber("cash-out-pin");
  const balance = getInnerText("balance");
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
  setInnerText(totalBalance);
});

// transction feature

// toggling feature
const forms = document.getElementsByClassName("form");
for (const form of forms) {
  form.style.display = "none";
}

// handle btn

document.getElementById("add-money-btn").addEventListener("click", function () {
  handleToggle("add-money-form");

  activeBtn("add-money-btn");
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
  handleToggle("cash-out-form");

  activeBtn("cash-out-btn");
});

document
  .getElementById("transction-btn")
  .addEventListener("click", function () {
    handleToggle("transion-form");
    activeBtn("transction-btn");
  });
