const number = document.querySelector('#num');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const newPar = document.createElement("p");
    newPar.innerHTML = number.value;
    document.getElementById('inputNum').appendChild(newPar);

    const arrP = document.getElementById('inputNum').getElementsByTagName('p');
    //console.log(arrP);
    let sum = 0;
    for (let i = 0; i < arrP.length; i++) {
        //console.log(arrP[i]);
        sum = sum + Number(arrP[i].innerHTML);
    }

    //console.log(sum);
    let average = sum / arrP.length;
    console.log(average);

    const result = document.getElementById('resultNum');
    result.innerHTML = 'The average is: ' + average;

    
});