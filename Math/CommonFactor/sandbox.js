const button = document.querySelector('button');

function gcd(a,b) {
    let gcdval = 1;
    for (let i = 2; i <= Math.min(a,b); i++) {
        if (a % i == 0 && b % i == 0) {
            gcdval = i;
        }
    }
    return gcdval;
}

button.addEventListener('click', () => {
    const number1 = document.getElementById('num1');
    const number2 = document.getElementById('num2');
    const fnum = Number(number1.value);
    const snum = Number(number2.value);

    
    let result = gcd(fnum, snum);

    document.getElementById('resultFac').innerHTML = result;
})