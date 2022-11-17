const buttonNumbers = document.getElementsByName('data-number');
const buttonOperation = document.getElementsByName('data-opera');
const buttonDelete = document.getElementsByName('data-delete')[0];
const buttonSame = document.getElementsByName('data-igual')[0];

var result = document.getElementById('result');
var actualOperation = '';
var previousOperation = '';
var operation = undefined;

buttonNumbers.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText);
    })
});

buttonOperation.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperation(button.innerText);
    })
});

buttonSame.addEventListener('click', function(){
    calculate();
    resfreshDisplay();
});

buttonDelete.addEventListener('click', function(){
    clear();
    resfreshDisplay();
});

function addNumber(num){
    actualOperation = actualOperation.toString() + num.toString();
    resfreshDisplay();
}

function resfreshDisplay(){
    result.value = actualOperation;
}

function clear(){
    actualOperation = '';
    previousOperation = '';
    operation = undefined;
}

function resfreshDisplay(){
    result.value = actualOperation;
}

clear();

function selectOperation(op){
    if(actualOperation === '') return;
    if(previousOperation !== ''){
        calculate()
    }
    operation = op.toString();
    previousOperation = actualOperation;
    actualOperation = '';
}

function calculate(){
    var calculate;
    const previous = parseFloat(previousOperation);
    const actual = parseFloat(actualOperation);
    if (isNaN(previous) || isNaN(actual)) return;
    switch(operation){
        case '+':
            calculate = previous + actual;
            break;
        case '-':
            calculate = previous - actual;
            break;
        case '/':
            calculate = previous / actual;
            break;
        case 'x':
            calculate = previous * actual;
            break;
        default:
            return;
    }
    actualOperation = calculate;
    operation = undefined;
    previousOperation = '';
}