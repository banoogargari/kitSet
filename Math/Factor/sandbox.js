console.log('sahba')
const input = document.getElementById('num');
const button = document.querySelector('button')




button.addEventListener('click', () => {
    let number = Number(input.value);

    let result = [];
    for (let i = 1; i < (number + 1); i++) {
        //console.log(number % i);
        if (number % i == 0) {
            //console.log(i);
            //console.log(number);
            result.push(i);
        }
    };

    document.getElementById('resultFac').innerHTML = 'The result is ' + result;

    
    //console.log(result);
})


