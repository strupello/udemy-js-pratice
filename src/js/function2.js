function greetUser() {
  console.log("Siema Chatgpt, lecimy tutaj z nauka js!");
}
greetUser();
greetUser();
greetUser();

function chooseGame(game) {
  console.log("Lubię grać na komputerze w " + game + " i popijać colę.");
}
chooseGame("Bannerlord 2");
chooseGame("Dota 2");
chooseGame("Diablo 4");

function first() {
  console.log("Funkcja FIRST ZOSTAŁA urchomiona!");

}
  console.log(first); // Tutaj została przepisana cała funkcja, tak jakby była cytowana, nawet z enterem który mam między consola.log a zamknięciem klamry
 console.log(first()); // a tutaj jest tylko tekst który jest consolog co wywoluje funkcja


 function add(a, b){
  return a + b;
}
  const result =  add(5, 7);
  let sum = add(12, 3);
  console.log (result);
  console.log (sum);

  let userName = 'Bzyku'

  function showName() {
      let userName = 'Strup'
      console.log(userName);
  }
  console.log(userName);
  showName();

  const btn = document.getElementById('click-here');

  function buttonClick() {
        console.log('Mój drugi alert w js w karierze, po kliknięciu');
  }
  btn.addEventListener('click', buttonClick);


  function transform(value, operation) {
  return operation(value);
}
function triple(number) {
  return number * 3;
}

console.log(transform(40, triple));

function callPizza(pizza, sauceFunction) {
  return sauceFunction(pizza);
}

function ketchup(pizzaName) {
  return pizzaName + ' + sos ketchup';
}

console.log(callPizza('Margherita', ketchup));

function useCallback(value, fn) {
  return fn(value);
}
function addTen(num) {
  return num + 10;
}
console.log(useCallback(5, addTen));

function hello() {
  console.log("Hello!");
}

console.log(hello);