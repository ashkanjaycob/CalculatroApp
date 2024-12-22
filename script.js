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
