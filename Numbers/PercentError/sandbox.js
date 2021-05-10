const form = document.querySelector('form');
const acceptedNum = document.querySelector('#accnum');
const experimentNum = document.querySelector('#exnum');
const percentage = document.querySelector('#percentage');




form.addEventListener('submit', e => {
    e.preventDefault();
    
    result = ((acceptedNum.value - experimentNum.value) / acceptedNum.value) * 100;
    percentage.value = result;

    

    

});