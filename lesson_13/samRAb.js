/**### Задание 1
 У вас есть массив объектов: */
/**Создайте на основе старого массива новый массив объектов по образу:
[{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...] */
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

var andereCars = []; 
for (i = 0; i < cars.length; i++) {
    let car = cars[i];  
    let andereCar = {
        brand: car.brand,
        isDiesel: car.isDiesel
    };  
    andereCars.push(andereCar);  
console.log(andereCars);
}
/**Создаем массив только с машинами, у которых дизельный двигатель. */
