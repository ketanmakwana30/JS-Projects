const showPass = document.getElementById("show-pass");
const copy = document.querySelector(".copy");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("num");
const symbol = document.getElementById("symbol");
const length = document.getElementById("length");
const btn = document.getElementById("btn");

function generatePassword() {
  const lowerVar = "abcdefghijklmnopqrstuvwxyz";
  const upperVar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numVar = "1234567890";
  const symbolVar = "!@#$%&_/\~:";

  let isUpper = upper.checked;
  let isLower = lower.checked;
  let isNumber = number.checked;
  let isSymbol = symbol.checked;
  let len = parseInt(length.value);

  if (isNaN(len) || len <= 0) {
    len = 12;
  }
  if (len > 15) {
    len = 15;
  }

  let pool = "";
  if (isUpper) pool += upperVar;
  if (isLower) pool += lowerVar;
  if (isNumber) pool += numVar;
  if (isSymbol) pool += symbolVar;

  if (pool === "") {
    alert("Select at least one character type");
    return;
  }

  let password = "";

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    password += pool[randomIndex];
  }
  return password;
}

btn.addEventListener("click", () => {
  let result = generatePassword();
  if (result) showPass.textContent = result;
});

copy.addEventListener("click", () => {
  const currentPassword = showPass.textContent;
  if (!currentPassword) return;
  navigator.clipboard.writeText(currentPassword);

  copy.classList.remove("ri-save-2-line");
  copy.classList.add("ri-check-line");

  setTimeout(() => {
    copy.classList.remove("ri-check-line");
    copy.classList.add("ri-save-2-line");
  }, 1000);
});
