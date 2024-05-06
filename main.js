let advice = document.querySelector('#advice');
let fetch_btn = document.querySelector('.bottom-icon');
let advice_num = document.querySelector('#advice-num');

fetch_btn.addEventListener('click', fetch_advice);

async function fetch_advice() {
    fetch_btn.classList.add('rotate');
    let response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.json();
    advice.innerHTML = `" ${data.slip.advice} "`;
    advice_num.innerHTML = data.slip.id;
    fetch_btn.classList.remove('rotate');
}