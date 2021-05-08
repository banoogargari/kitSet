const form = document.querySelector('form');
const fistNum = document.querySelector('#num1');
const secondNum = document.querySelector('#num2');
const count = document.querySelector('#quantity');
const resultNum = document.querySelector('#resultNum');

function getRandomIntInclusive(min, max) {
    //min = Math.ceil(min);
    //max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



form.addEventListener('submit', e => {
    e.preventDefault();
    
    let n = count.value;
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(getRandomIntInclusive(fistNum.value, secondNum.value));

    }

    resultNum.value = result;
});