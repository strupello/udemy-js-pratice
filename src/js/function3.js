function helloByku () {
    console.log('Wróciłem do nauki byczku i nie dawaj podpowiedzi bo zjesz moje jaja!')
}
helloByku();
helloByku();

function greet(name) {
    console.log('Siema ' + name);
}
greet('Irku');
greet('Tomaszu');
greet('Marcinie');

function add(a, b) {
    return a + b;
}
let result = add(5, 7)
console.log(result);

function multiply(a, b = 2) {
    return a * b;
}
 let result1 = multiply(10, 10);
 let result2 = multiply(10);
 console.log(result1);
  console.log(result2);

  function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
  }
  console.log(isAdult(10));
  console.log(isAdult(18));
  console.log(isAdult(25));

  function run(operation, value) {
    return operation(value);
    }

  function double(num){
    return num * 2;
  }
  console.log(run(double, 5));

  function sayHello() {
    return 'Hello!';
  }
  function callMe(callback) {
    return callback();
  }
console.log(callMe(sayHello));

function transform(value, operation){
    return operation(value);
}
function tripple(x) {
    return x * 3;
}
console.log(transform(7, tripple));