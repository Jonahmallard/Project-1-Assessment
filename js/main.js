let total;

let input = document.getElementById("number");
// let input2 = document.getElementById("num2");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let totalSpan = document.querySelector("span");


plus.addEventListener("click", addNumber)
minus.addEventListener("click", subtractNumber)

function init() {
  total = 0;
  input.value = 1;
  render();
}

function render() {
  if (total < 0) {
    totalSpan.innerHTML = `<span class="red">${total}</span>`
  } else {
    totalSpan.innerHTML = `<span>${total}</span>`
  }
}

function addNumber() {
  if (!input.value.length) {
    return;
  }
  let number = parseInt(input.value)
  total += number
  render();
}

function subtractNumber() {
    if (!input.value.length) {
      return;
    }
    let number = parseInt(input.value)
    total -= number
    render();
  }

init();