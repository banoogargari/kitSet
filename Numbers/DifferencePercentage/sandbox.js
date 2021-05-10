const form = document.querySelector('form');
const fistNum = document.querySelector('#num1');
const secondNum = document.querySelector('#num2');
const percentage = document.querySelector('#percentage');
const diff = document.querySelector('#diff');




form.addEventListener('submit', e => {
    e.preventDefault();
    
    result = ((secondNum.value - fistNum.value) / fistNum.value) * 100;
    percentage.value = result;

    diff.value = secondNum.value - fistNum.value;

    

});