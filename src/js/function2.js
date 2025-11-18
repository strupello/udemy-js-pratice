function showUser(name, age) {
    return `Jestem ${name} i mam ${age} lata!`
}
const result = showUser("Irek", 33);
console.log(result);
alert(result);

function double(value) {
  return value * 2;
}
function transform(number, fn) {
  return fn(number);
}
console.log( transform(10, double) );