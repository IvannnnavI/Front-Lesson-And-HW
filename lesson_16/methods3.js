// ? методы массивов

// pop(), мутирующий, удаляет с конца, возвращает удаленный элемент
// push(), мутирующий, добавляет к концу, возвращает длину нового массива
// shift(), мутирующий, удаляет из начала, возвращает удаленный элемент
// unshift(), мутирующий, добавляет в начало, возвращает длину нового массива

// * forEach(), мутирующий, производит заданные операции с каждым элементом массива, возвращает undefined
// * map(), не мутирующий, возвращает новый массив с элементами, итерируется по старому массиву с доступом к его элементам
// * filter(), не мутирующий, возвращает новый массив с элементами, которые удовлетворяют условию фильтрации
// * find(), не мутирующий, возвращает первый элемент, который удовлетворяет условию
// если не найдет элемент вернет undefined

// * reduce(), не мутирующий, возвращает новый массив с элементами =>
// => принимает два аргумента: стрелочную функция с двумя параметрами (аккумулятор, промежуточное значение)
// => начальное значение

// * reverse(), не мутирующий, возвращает новый массив с элементами в обратном порядке
// * join(), не мутирующий, возвращает строку объединенную соединителем строкой
// * splice(), мутирующий, принимает два параметра =>
// индекс начала ==>
// кол-во элементов (не обязательный)
// возвращает удаленные элементы

// * sort()
// мутирующий, сортирует исходный массив, возвращает также отсортированный массив (2 в 1)
// по умолчанию числа сортирует как строки, работает в алфавитном порядке
// при сортировке строк: приведите в единый регистр
// при сортировки чисел: передайте функцию сортировки: arr.sort((a, b) => a - b)

// ? методы строк и массивов

// * slice(), возвращает новый массив / строку, возвращает новый массив / строку, принимает два параметра =>
// => индекс начального элемента включительно ==>
// => индекс до которого не включительно (не обязательный параметр)

// ? методы строк

// * split(), принимает разделитель строку, возвращает массив строк по разделителю
// * toUpperCase()
// * toLowerCase()
// * charAt()

const brothersFirstHalf = [
  { name: 'Frodo', height: 60, race: 'hobbit', age: 30, hasMagic: false },
  { name: 'Sam', height: 62, race: 'hobbit', age: 29, hasMagic: false }
]

const brothersSecondHalf = [
  { name: 'Ghimli', height: 50, race: 'dwarf', age: 200, hasMagic: false },
  { name: 'Legolas', height: 190, race: 'elf', age: 500, hasMagic: true },
  { name: 'Aragorn', height: 180, race: 'human', age: 50, hasMagic: false }
]

// * вариант решения объединения массивов через spread оператор

// const brothers = [...brothersFirstHalf, ...brothersSecondHalf]
// const brothersInArray = [[...brothersFirstHalf], [...brothersSecondHalf]]

// * 1. concat()
// метод не мутирующий
// возвращает объединенный массив
// вы можете передавать несколько массивов, в качестве аргументов для объединения

const brothers = brothersFirstHalf.concat(brothersSecondHalf)

console.log(brothersFirstHalf)

console.log('братья', brothers)

// * 2 includes()
// принимает значение, и ищет его соответствие в массиве
// через оператор && можно передавать несколько значения для поиска
// возвращает булевое значение

const names = brothers.map(el => el.name)

console.log(names)

console.log(names.includes('Ghimli' && 'Aragorn'))

// * 3 findIndex()
// не мутирующий
// принимает стрелочную функцию
// возвращает индекс первого элемента, который удовлетворяет условию
// ! если не один из элементов не удовлетворяет условию - вернет -1

console.log(names.findIndex(el => el === 'Ghimli'))
console.log(brothers.findIndex(el => el.name === 'Aragorn'))

// напишите функцию, которая принимает массив элементов и элемент, который нужно удалить из массива
// функция должна вернуть массив без удаленного элемента
// подумайте про то, чтобы если такого элемента в массиве нет - функция работала корректно

names.push('Gendalhf')
console.log(names)

function deleteElementFromArray(arr, el) {
  const index = arr.findIndex(name => name === el)
  if (index !== -1) {
    arr.splice(index, 1)
    return arr
  }
  console.log('No such element in array :(')
  return arr
}

console.log(deleteElementFromArray(names, 'Legolass'))

// replace()
// метод только для строк
// заменяет подстроку в строке
// принимает что будет изменять первым аргументом, и на что поменяет вторым аргументом
// вернет массив неизменным, если не получится найти подстроку

// имеем большую строку

names.push('Ghimli')
const namesStr = names.join(', ')

console.log(namesStr)

// вы указываете что и на что в меняете
console.log(namesStr.replace('Ggg', 'GHIMLI'))

// можете использовать регулярные выражения
console.log(namesStr.replace(/Ghimli/g, 'GHIMLI'))

// ? генерация случайных чисел

// хотим получить случайное число от 1 до 100

// Math.random() - возвращает случайное число с плавающей точкой от 0 до 1
// Math.floor() - округляет до ближайшего целого числа вниз

// чтобы не включать 0 и включить 100 - прибавляем 1

console.log(Math.floor(Math.random() * 100) + 1)