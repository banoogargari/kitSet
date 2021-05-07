const button = document.querySelector('button');

button.addEventListener('click', () => {
    const percentage = document.getElementById("percentage").value;
    const inputNum = document.getElementById("number").value;
    const increasingNum = percentage / 100 * inputNum
    const result = Number(increasingNum) + Number(inputNum);
    
    document.getElementById("resultNum").value = result;
    //console.log(result);
    document.getElementById("increasingNum").value = increasingNum;

    
})
