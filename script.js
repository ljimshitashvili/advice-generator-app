const id = document.querySelector('#advice-id');
const txt = document.querySelector('#adivce-text');
const button = document.querySelector('#button');

async function catchAdvice(){
    
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    id.textContent = data.slip.id;
    txt.textContent = '"' + data.slip.advice + '"';
    
}

button.addEventListener('click', catchAdvice);