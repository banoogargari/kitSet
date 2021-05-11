const button = document.querySelector('button');

function gcd(a,b) {
    if(b == 0) {
        return a;
    }else {
        return gcd(b, a % b);
    }
}

button.addEventListener('click', () => {
    const number1 = document.getElementById('num1');
    const number2 = document.getElementById('num2');
    const fnum = Number(number1.value);
    const snum = Number(number2.value);

    
    let result = gcd(fnum, snum);

    document.getElementById('resultFac').innerHTML = result;
})