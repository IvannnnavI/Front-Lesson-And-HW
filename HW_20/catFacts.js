const button = document.querySelector('#btn-changeFact');
const factText = document.getElementById('catFact');

async function getCatFact() {
    button.innerText = 'Загрузка...';  

    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();  

    factText.innerText = data.fact;  
    button.innerText = 'Получить факт';  
}

getCatFact();

button.addEventListener('click', getCatFact);



