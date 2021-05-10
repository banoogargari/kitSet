const form = document.querySelector('form');
const slopNum = document.querySelector('#slop');
const intersect = document.querySelector('#intersect');
const ans = document.querySelector('#ans');
const resultNum = document.querySelector('#resultNum');


form.addEventListener('submit', e => {
    e.preventDefault();
    
    resultNum.value = ((ans.value - intersect.value) / slopNum.value)

    
});