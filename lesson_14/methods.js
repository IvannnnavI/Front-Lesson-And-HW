// Методы массивов 

// мы уже знаем .push - добавляет в конец массива мутирующий.
// мы уже знаем .anschift - добавляет в начало массива мутирующий.
// мы уже знаем .pop - убирает  с конца  массива мутирующий.
// мы уже знаем .schift - удаляет элемент  из начала массива мутирующий.


const brothers = [
    { name: 'Legalas', height: 190, race: 'elf', age: 500, hasMagic: true },
    { name: 'Aragorn', height: 180, race: 'human', age: 50, hasMagic: false },
    { name: 'Gimly', height: 50, race: 'dwarf', age: 200, hasMagic: false },
    { name: 'Gendalf', height: 200, race: 'mayar', age: 2000, hasMagic: true },
    { name: 'Frodo', height: 60, race: 'hobbit', age: 30, hasMagic: false },
]

let Sam = { name: 'Sam', height: 60, race: 'hobbit', age: 30, hasMagic: false }

brothers.unshift(Sam)
console.log(brothers)

//* 1.Метод map() . Метод нужен для создания нового массива c результами вызова функций на основании исходного массива.

// я хочу создать массив из имен наших героев.
// Пример 1.
const names = brothers.map(brothers => brothers.name)
const ages = brothers.map(el => el.age)
console.log(names)
console.log(ages)

// новый массив с именами и рассами

const namesAndRace = brothers.map(brother => brother.race + " " + brother.name)
console.log(namesAndRace)

// массив только высоких братьев.

/*const tallBro = brothers.map(brother => {
    if (brother.height >= 170) {
        tallBro.push(brother)
    }
})
console.log(tallBro)*/

//* forEach()
// мутирующий метод, мы можем изменять элементы исходного массива.
// принимает стрелочную функцию.
// можем состарить братьев на 1 год
brothers.forEach(brother => (brother.age += 1))
console.log(brothers)

// перезапись в верхнем регистре.
brothers.forEach(brother => brother.name = brother.name.toUpperCase())
console.log(brothers)

//* filter()
// не мут. возвращает массив элементов удовл.  одному или нескольким условиям
console.log(brothers.filter(el => el.age > 100))
console.log(brothers.filter(el => (el.age > 100) && (el.hasMagic === true)));

//.find() - возращает значение первого элемента в массиве которое удовлетворяет пред. функцию

const human = brothers.find(el=>el.race === 'human')
console.log(human)

//*.reduce не мутирующий.
// допустим хотим получить сумму возрастов всех героев.
// принимает стрелочную функцию и начальное значение переменной


const sum2 = ages.reduce((acc, current) => acc + current, 0)

console.log(sum2)

// можно вызывать методы по цепочке.

const namesStr =  brothers.map(el=>el.name).reduce((acc, name) => acc + name + ', ', 'BrothersHood:')
console.log(namesStr)