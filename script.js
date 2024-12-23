let currentInput = "";
let operation = "";

const resultField = document.getElementById("result");

function appendNumber(number) {
  currentInput += number;
  console.log(currentInput);
  updateDisplay();
}

function delteNumber() {
  currentInput = currentInput.trim().slice(0, -1);
  console.log(currentInput);
  updateDisplay();
}

function updateDisplay() {
  resultField.value = currentInput || "0";
}

function clearResult() {
  currentInput = "";
  updateDisplay();
}

function appendOperation(op) {
  if (/[+\-*%/] $/.test(currentInput)) {
    currentInput = currentInput.slice(0, -3) + ` ${op} `;
  } else {
    if (currentInput !== "") {
      currentInput += ` ${op} `;
    }
  }
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput.replace("%", "/100")).toString();
  } catch {
    currentInput = "";
  }
  updateDisplay();
}

// toggle between + & -
function toggleSign() {
  if (currentInput && !isNaN(currentInput)) {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
}
