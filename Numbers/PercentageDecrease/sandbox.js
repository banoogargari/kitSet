const form = document.querySelector('form');
const percentage = document.querySelector('#percentage');
const number = document.querySelector('#num');
const result = document.querySelector('#result');
const decAmount = document.querySelector('#decAmount');





form.addEventListener('submit', e => {
    e.preventDefault();
    
    result.value = number.value - (percentage.value * number.value / 100);

    decAmount.value =  percentage.value * number.value / 100;
});

