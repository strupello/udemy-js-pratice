let x = 10;
let y = 4;

let result = x + y;
console.log(result);

let currentYear = 2025;
let birthYears = 1992;

let ages = currentYear - birthYears;

console.log("Masz " + ages + " lat!");

let price =  120;
let tax = 0.23;

let finalPrice = price + (price * tax);
console.log("Cena końcowa:" + finalPrice );

let a = 7;
let b = 3;
let c = 2;

let operationResult = ( a + b ) * c;
console.log(operationResult);

let age = 33;
let firstName = 'Irek';
let lastName = 'Bzyku';

console.log('Nazywam się ' + firstName + lastName + 'i mam ' + age + 'lata.');


  const btn = document.getElementById('click-here');


  btn.addEventListener('click', function(buttonClick) {
    alert('Mój pierwszy klik!');
  });
