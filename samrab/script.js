const btn1 = document.getElementById('knopka0')
const btn2 = document.getElementById('knopka1')
const btn3 = document.getElementById('knopka2')


btn1.addEventListener('click', () => {
    const newElement = document.createElement('h2')
    newElement.innerText = 'мы добавили h2'
    newElement.id = 'elem'
    newElement.className = 'elem'
    document.body.appendChild(newElement)
    btn2.addEventListener('click', () => {
        newElement.style.color = 'green'
    })
    btn3.addEventListener('click', () => {
        newElement.remove()
    })
})

