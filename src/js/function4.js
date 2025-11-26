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
    let result = document.querySelector('.wynik');
    result.textContent = finalResult;
}

function subtractionFive(){
    let minusFive = getUserInput();
    let finalResult = minusFive - 5;
    let result = document.querySelector('.wynik');
    result.textContent = finalResult;
}
function multiplicationTwo(){
    let multiTwo = getUserInput();
    let finalResult = multiTwo * 2;
    let result = document.querySelector('.wynik');
    result.textContent = finalResult;
}
function divisionTwo(){
    let diviTwo = getUserInput();
    let finalResult = diviTwo / 2;
    let result = document.querySelector('.wynik');
    result.textContent = finalResult;
}


let przyciskAdd = document.getElementById('add-5');
let przyciskSubtraction = document.getElementById('subtraction-5');
let przyciskMultiplication = document.getElementById('multiplication-2');
let przyciskDivision = document.getElementById('division-2');
przyciskAdd.addEventListener("click", addFive);
przyciskSubtraction.addEventListener("click", subtractionFive);
przyciskMultiplication.addEventListener("click", multiplicationTwo);
przyciskDivision.addEventListener("click", divisionTwo);