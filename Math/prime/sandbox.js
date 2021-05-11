const button = document.querySelector('button');



button.addEventListener('click', () => {
    const input = document.getElementById('num');
    let number = Number(input.value);
    let is_prime = true;
    if (number == 1)
        is_prime = false;
    else {
        for (let i = 2; i < number; i++) {
            
            if (number % i == 0) {
                //console.log(number);
                is_prime = false;
                break;
            }    
        }

        
    }

    if (is_prime)
        document.getElementById('resultFac').innerHTML = number + ' is  Prime';
    else
        document.getElementById('resultFac').innerHTML = number + ' is not Prime'

    
})