const currentResult = 0;

function getUserInput (){
    let enteredValue = document.getElementById('user-id');
    let numberAsText = enteredValue.value;
    let numberAsNumber = parseInt(numberAsText);
    return numberAsNumber;
}

function addFive(){
    let sumFive = getUserInput();
    let finalResult = sumFive + 5;
    let result = document.querySelector('.wynik')
    result.textContent = finalResult;
}
let przycisk = document.getElementById('add-5');

przycisk.addEventListener("click", addFive);