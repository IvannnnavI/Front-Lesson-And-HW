const cars = [
    { brand: 'Tesla', model: 'Model S', year: 2022, color: 'red', isElectric: true },
    { brand: 'Toyota', model: 'Camry', year: 2018, color: 'blue', isElectric: false },
    { brand: 'BMW', model: 'X5', year: 2020, color: 'black', isElectric: false },
    { brand: 'Nissan', model: 'Leaf', year: 2021, color: 'green', isElectric: true },
    { brand: 'Ford', model: 'Mustang', year: 2019, color: 'yellow', isElectric: false }
];

/*Задание 1
Создайте новый массив, содержащий только электрические машины (свойство isElectric равно true) и включающий только их модели и цвета. Объедините модели и цвета каждой машины в одну строку, разделенную запятой и пробелом. */
//* решение 1
const onlyElectricCars = cars.filter(car => car.isElectric).map(car => `${car.model}, ${car.color}`);
console.log(onlyElectricCars)
//* решение 2
let onlyElectricCars2 = cars.reduce((acc, car) => {
    if (car.isElectric) {
        acc.push(`${car.model}, ${car.color}`)
    }
    return acc;
}, [])
console.log(onlyElectricCars2)

/**Задание 2
Создайте новый массив, содержащий машины, отсортированные по году выпуска в порядке убывания. Объедините модели и бренды каждой машины в одну строку, разделенную дефисом. Переставьте машины в строке в обратном порядке. */
const sortYearCars = cars.sort((a, b) => b.year - a.year).map(car => `${car.model} - ${car.brand}`).map(str => str.split('-').reverse().join('-'));
console.log(sortYearCars)

//* решение 2
const sortYearCars2 = [];
cars.sort((a, b) => b.year - a.year).forEach(car => {
    let modAndBrand = `${car.model}-${car.brand}`;
    sortYearCars2.push(modAndBrand.split('-').reverse().join('-'));
});
console.log(sortYearCars2)

/**Задание 3
Напишите функцию, она будет принимать массив строк, приводить каждую строку к нижнему регистру, сортировать, а затем переворачивать каждое слово в строке задом наперед, и наконец делать первую букву в строке заглавной.
для того, чтобы сделать первую букву заглавной используйте charAt() */
function changeStr(arrStr) {
    return arrStr.map(s => s.toLowerCase())
        .sort() 
        .map(s => s.split(' ') 
                   .map(word => word.split('').reverse().join('')) 
                   .join(' ')) 
        .map(s => s.charAt(0).toUpperCase() + s.slice(1));  
}

const carStrings = cars.map(car => `${car.brand} ${car.model}`);

const changeCarsStr = changeStr(carStrings);

console.log(changeCarsStr);

/**Задание 4
Напиши функцию, которая удаляет все нечетные числа и выдает массив отсортированных чисел задом наперед, а также число - их сумму в шаблонной строке. */
function processNumbers(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    const sortEvenNumbers = evenNumbers.sort((a, b) => b - a);
    const sum = sortEvenNumbers.reduce((acc, num) => acc + num, 0);
    return { sortEvenNumbers, sum };
  }
  const carYearNum = cars.map(car=>car.year);
  console.log(carYearNum)
  const changNum = processNumbers(carYearNum);
  console.log(changNum)

  