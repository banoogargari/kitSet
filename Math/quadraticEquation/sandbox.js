const form = document.querySelector('form');
const firstNum = document.querySelector('#firstNum');
const slop = document.querySelector('#slop');
const intersect = document.querySelector('#intersect');
const ans = document.querySelector('#ans');
const fresultNum = document.querySelector('#resultNum1');
const sresultNum = document.querySelector('#resultNum2');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let delta = Math.sqrt((((slop.value)^2) - (4 * firstNum.value * intersect.value)));
    console.log(delta);
    fresultNum.value = (-slop.value + delta) / 2 * firstNum.value;
    sresultNum.value = (-slop.value - delta) / 2 * firstNum.value;
    
});