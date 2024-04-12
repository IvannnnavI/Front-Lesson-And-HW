console.log('welcome to JS');

let x   // let - можно переопределить

x = "word"
x = "another word" 

console.log(x);
const fruit = "orange" //const -  нельзя переопределить 

x = 42
console.log(x);

// примитивные типы данных:
//* String - строка

let planet = 'Earth'
planet = 'Mercury'
planet = `Mars`
console.log(planet);

//* Number - число
let n1 = 9
let n2 = 8.5

// самое большое safe число которое может быть использовано в js
console.log(Number.MAX_SAFE_INTEGER);

// *Bigint - большое

let n3 = 9n
console.log(typeof n3)

//* Boolean - булевое значение

//true & false
// рекомендуется называть переменную вопроситель

let isDrink  =false
let hasMother = true

//* Undefined - Определение: Тип данных для переменной, которой не было присвоено значение.

//* Null Тип данных, представляющий собой отсутствие значения или отсутствие объекта.
let user = null;

//*Symbol Уникальный и неизменяемый тип данных, используемый в качестве идентификатора для свойств объектов.
let sym = Symbol("description");

// * Преобразование типов:

// 1. Преобразование в строку

// неявное
let s2 = 5 + ''
console.log(99 + +'1') // будет 100

console.log(s2, '- это:', typeof s2)

// явное
// мы превратили булевое значение в строку
let s3 = String(false)
console.log(typeof s3)

// 2. Преобразования в числа

// неявное
let s4 = +'42'
console.log(typeof s4)

// c оператором вычитания мы приводим строку к числу
let s7 = 5 - '2'
console.log(s7, typeof s7)


// сначала 9 преобразуется в строку, после 999 в число
console.log('99' + 9 - 5) // 994

//явное

let s5 = Number('777dfdsf')

// если Number() встретит непревращаемые в число символы
// он выведет NaN

// console.log(typeof s5)

// parseInt() будет превращать в число символы пока не встретит непревращаемый

let s6 = parseInt('9999usd')

console.log(s6)

// 3. Логическое преобразование

// число в boolean

// 0 будет равен false
let l5 = Boolean(0)
console.log(l5)

// положительные числа это будет true
let l6 = Boolean(-5)
console.log(l6)

// странно, но отрицательные также true
let l7 = Boolean(-5)
console.log(l7)

// NaN в булевом значении будет false
let l8 = Boolean(NaN)
console.log(l8)

// Операторы:

// - арифметические

let l9 = 12 + 48 // + сложение
let l10 = 10 - 2 // - вычитание
let l11 = 4 * 8 // - умножение
let l12 = 8 / 2 // - деление

let l13 = 9 % 4 // - остаток от целочисленного деления

console.log(l13)

let l14 = 9 ** 3 // - возведение в степень

// - операторы сравнения

// >, <, >=, <=

// coercion - неявное преобразование типов

// == - это равенство с приведением типов
// 'ленивое' равенство, чтобы не приводить строку к числу

// строка 9 преобразуется к числу
// js будет сравнивать числа

console.log(9 == '9')

console.log('home' == 'home')

// === - это строгое
// без приведения типов

console.log(9 === '9')

// знак неравенства !==
console.log(9 !== '9')

let number = 'a'
console.log(typeof (number ** 3))
