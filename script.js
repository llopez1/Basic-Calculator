//variable declaration
let num1Input = document.querySelector('#number1');
let num2Input = document.querySelector('#number2');

const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');

//addEventListener
add.addEventListener('click', addNumbers);
subtract.addEventListener('click', subtractNumbers);
multiply.addEventListener('click', multiplyNumbers);
divide.addEventListener('click', divideNumbers);

//functions
function addNumbers(e) {
  let sum = parseInt(num1Input.value) + parseInt(num2Input.value);
  answer.innerHTML = sum;
}
function subtractNumbers(e) {
  let difference = parseInt(num1Input.value) - parseInt(num2Input.value);
  answer.innerHTML = difference;
}
function multiplyNumbers(e) {
  let product = parseInt(num1Input.value) * parseInt(num2Input.value);
  answer.innerHTML = product;
}
function divideNumbers(e) {
  let quotient = parseInt(num1Input.value) / parseInt(num2Input.value);
  answer.innerHTML = quotient;
}

//dark mode
document.body.onkeyup = function(e){
  if(e.key === 'd') {
    document.body.classList.toggle('dark');
    
  }
}