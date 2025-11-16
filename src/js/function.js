
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
