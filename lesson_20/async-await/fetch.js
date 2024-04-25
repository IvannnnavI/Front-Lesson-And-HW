// fetch запрос 
// с помощью fetch мы посылаем HTTP запросы на получение информации с сервера.
// чтобы дождаться этой информации - нам придется обработать Promis

// Json - javaScript Object Notation
// используется для хранения информации в парах ключ значение.
// API - application programming interface - интерфейс для взаимодействия с программой.


//
fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json()) // обрабатываем json через json
.then(data => console.log(data)) // обрабатываем promise , забираем данные и выводим в консоль.