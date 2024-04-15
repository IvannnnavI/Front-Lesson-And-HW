/*
### Задание 1
Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна".
Создайте еще один массив с возрастами: 18, 27, 74, 34; Создайте и заполните
при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"*/
const names = ['Семен', "Иван", " Петр", "Татьяна"];
const ages = [18, 27, 74, 34];

const people = []

for (let i = 0; i < names.length; i++) {
    people.push(names[i] + ' ' + ages[i] + ' лет')
}
console.log(people);
console.log('==================================================================================');

/*### Задание 2
Используя пройденные на занятии методы массива получите из этого массива новый массив,
в котором элементы идут в обратной последовательности.*/

const reversePeopleWithoutReverse = [];
for (let i = people.length - 1; i >= 0; i--) {
    reversePeopleWithoutReverse.push(people[i]);
}
console.log(reversePeopleWithoutReverse);

//*с использованием reverse()
const reversePeopleWithReverse = [];

console.log(reversePeopleWithReverse);

/*
### Задание 3
Создайте пустой массив fruits.
добавьте в массив следующие фрукты: "яблоко", "банан", "апельсин".
Удалите последний элемент из массива и сохраните значение в переменной.
Добавьте его в начало массива.
Выведите fruits в консоль*/

const fruits = [];
fruits.push('яблоко', "банан", "апельсин");
const last = fruits.pop();
fruits.unshift(last)
console.log(fruits)
/*### Задание 4
Объедините fruits с массивом veggies (в него добавьте строки овощи) через spread в массив fruitsAndVeggies
Используя деструктуризацию заведите переменную под каждый элемент нового массива
Выведите fruitsAndVeggies в консоль
*/

const veggies = [];
veggies.push('лук', "картофель", "баклажан", "огурец");
const fruitsAndVeggies = [...fruits, ...veggies];
const [apple, banana, orange, onion, potato, aubagine, cucumber] = fruitsAndVeggies;


console.log(fruitsAndVeggies[3], aubagine)


