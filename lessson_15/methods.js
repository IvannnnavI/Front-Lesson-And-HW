// * Методы массивов

// мы уже знаем методы добавления / удаления элементов:

//? push() - мутирующий, добавляет элемент в конец массива, возвращает длину нового массива
//? unshift() - мутирующий, добавляет элемент в начало массива, возвращает длину нового массива
//? pop() - мутирующий, удаляет элемент из конца массива, возвращает удаленный элемент
//? shift() - мутирующий, удаляет элемент из начала массива, возвращает удаленный элемент
//? метод map() - немутирующий. возвращает массив.
//? forEach мутирующий метод, мы можем изменять элементы исходного массива возвращенное значение - undefined, будьте осторожны и не присвойте его новому массиву случайно...
//? filter() не мутирующий метод (создает новый массив) возвращает массив элементов удовлетворяющих одному или нескольким условиям
//? reduce() не мутирующий, возвращает новый массив
//? find() не мутирующий метод возвращает первый элемент, удовлетворяющий условию

// * 1. методы slice() не мутирующий, возвращает новый массив элементов. Принимает 2 параметра
// и для массивов и для строк.
// 1. Индекс элемента с которого отрезает
// 2. индекс до которого отрезаем( не включительно.)
const names = ['Frodo', 'Sam', 'Pipin', 'Merry', 'Boromor', 'Faramir']
const namesSliced = names.slice(0, 3)

const lastTwo = names.slice(-2, names.length)
console.log(lastTwo)
console.log(namesSliced)

//* Метод splice() (для массивов)
// мутирующий метод.
// принимает два параметра:
// 1. индекс откуда
// 2. кол-во элементов от первого индекса
// с минусовым значение можно отрезать с конца массива.
//! если не указать второй параметр, то удаляться все элементы начиная с указанного индекса включительно.
console.log(names)
//names.splice(-2)

//* Метод sort() сортирует элементы массива. Мутирующий. 
//names.sort()

console.log(names)

console.log(names.sort().reverse()) // сортировка по алфавитном и обратном порядке.

// для чисел сортировка.
const numbers = [4, 7, 100, 99, 1, 3, 9, 22]  // 2-ух и 3 ёх значные так не отсортирует. так по умолчанию числа сортируются как строки.

console.log(numbers.sort((a, b) => a - b))
console.log(numbers.sort((a, b) => b - a))  // в обратном порядке. с большего до меньшего.

// * join()
// объединяет элементы массива в строку
// принимает параметр-разделитель, строковое значение

// console.log(names)

// console.log(names.join(' и еще этот '))

// * split
// не мутирующий метод для строк
// вы передаете разделитель строку аргументом
// возвращает новый массив

let heroes = 'Sam, Pipin, Merry, Faramir, Boromir, Tom Bombadil'
let sauron = 'Sauron'

const heroesArr = heroes.split(', ')

console.log(heroesArr)

let reveredStr = heroes.split(', ').reverse().join(', ')

console.log(reveredStr)

// перевернули саурона задом наперед
let reversedSauron = sauron.toLowerCase().split(``).reverse().join(``)

console.log(reversedSauron)

// * slice() работает для строк
// первый параметр - индекс с которого мы вырезаем (ВКЛЮЧИТЕЛЬНО)
// второй параметр - индекс по который вырезаем (НЕ ВКЛЮЧИТЕЛЬНО)

console.log(heroes)

const newHeroes = heroes.slice(0, -5)

console.log(newHeroes)

//* indexOf()




const brothers = [
    { name: 'Legolas', height: 190, race: 'elf', age: 500, hasMagic: true },
    { name: 'Aragorn', height: 180, race: 'human', age: 50, hasMagic: false },
    { name: 'Ghimli', height: 50, race: 'dwarf', age: 200, hasMagic: false },
    { name: 'Gendalf', height: 200, race: 'mayar', age: 2000, hasMagic: true },
    { name: 'Frodo', height: 60, race: 'hobbit', age: 30, hasMagic: false },
]