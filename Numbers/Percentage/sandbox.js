const button = document.querySelector('button');

button.addEventListener('click', () => {
    const percentage = document.getElementById("percentage").value;
    const inputNum = document.getElementById("number").value;

    const result = percentage / 100 * inputNum;

    document.getElementById("resultNum").value = result;

    console.log(result);
})

