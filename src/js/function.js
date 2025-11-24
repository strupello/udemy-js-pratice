
function sayHello(name) {
    return `Cześć, ${name}!`;
}
const result3 = sayHello("Irek");
const result4 = sayHello("Bzyku");
console.log(result3);
console.log(result4);



function multiply (a, b) {
    const result = a * b;
    return result;
}
const result1 = multiply(3, 7);
const result2 = multiply(10, 5);

console.log(result1);
console.log(result2);

function getDouble (num) {
    const result = 2 * num;
    return result;
}
const wynik = getDouble(10);
console.log(wynik);

function getTriple (num) {
    const result = 3 * num;
    return result;
}
const wyniki = getTriple(7);
console.log(wyniki);

function greet(name) {
    return `Witaj, ${name}!`
}
const resul5 = greet("Irek");
console.log(resul5);

function last(num) {
    const result = num - 5;
    return result;
}
const odejmowanie = last(15);
console.log(odejmowanie);

function fullName (first, last) {
    return `Twoje pełne imię to: ${first} ${last}.`;
}
const result = fullName("Irek", "Bzyku");
console.log(result);
alert(result);


function getSuma (a, b) {
    const result = a + b;
    return result;
}
const suma = getSuma (2, 4);
console.log(suma);
alert(suma);

function getMessage (name, age) {
    return `Mam na imię ${name} i mam ${age} lata.`;
}

const result0 = getMessage ("Irek", "33");
console.log(result0);
alert(result0);


function showUser(name, age) {
    return `Jestem ${name} i mam ${age} lata!`
}
const result7 = showUser("Irek", 33);
console.log(result7);
alert(result7);

function double(value) {
  return value * 2;
}
function transform(number, fn) {
  return fn(number);
}
console.log( transform(10, double) );
