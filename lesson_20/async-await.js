function getName (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('Tom Cruise')
        },2000)
    })
}

getName().then(data => console.log(data))

// async / await  - аналог синтаксиса с цепочкой из .then . catch
// используется для обработки Promise

// пишите ключевое слово async перед объявлением функции.
// await пишите перед получением асинхронных данных

async function func() {
    const responce = await getName()
    console.log(responce + 'из async / await')
}

func()

function getFiveVer1() {
    return new Promise((res)=> {
        res(5)
    })
}

function getSix(){
    return 6
}

console.log
getFiveVer1().then(responce => console.log(responce))
console.log(getSix())