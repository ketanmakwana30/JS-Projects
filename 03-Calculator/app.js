const display = document.querySelector("#display");
const btnEl = document.querySelectorAll(".key");

let currVal = "";
const operators = ["+", "-", "*", "/", "%"];

btnEl.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();

    if (value === "AC") {
      currVal = "";
    } else if (value === "⌫") {
      currVal = currVal.slice(0, -1);
    } else if (value === "=") {
      try {
        currVal = String(eval(currVal));
      } catch {
        currVal = "Error";
      }
    } else {
      if (currVal === "Error") currVal = "";

      const lastChar = currVal.slice(-1);

      // If pressing an operator when the last character is ALSO an operator, replace it
      if (operators.includes(value) && operators.includes(lastChar)) {
        currVal = currVal.slice(0, -1) + value;
      } else {
        currVal += value;
      }
    }

    display.value = currVal;
  });
});
