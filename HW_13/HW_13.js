/*Задание 1. Ваша задача - написать программу, которая принимает массив объектов-людей и вычисляет общий возраст.

Создайте функцию calculateTotalAge, которая принимает массив объектов. Каждый объект в массиве представляет одного человека и имеет ключи: name и age В теле цикла, используйте деструктуризацию объекта для получения значения age и name. Верните общий возраст.*/
function calculateTotalAge(people) {
    let totalAge = 0;
    for (let i = 0; i < people.length; i++) {
      totalAge += people[i].age;
    }
    return totalAge;
  }
  
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];
  console.log(calculateTotalAge(people)); // 90

  //Задание 2. Создайте функцию compareObjects, которая принимает два объекта в качестве аргументов и проверяет их на равенство (все ключи и значения должны быть одинаковыми). Верните true, если объекты равны, и false в противном случае.
  function compareObjects (Object1, Object2) {
    const keys1 = Object.keys(Object1);
    const keys2 = Object.keys(Object2);
    const values1 = Object.values(Object1);
    const values2 = Object.values(Object2);

    if(keys1.length !== keys2.length) {
        return false;
    }

    for (let index = 0; index < keys1.length; index++) {
        if (keys1[index] !== keys2[index]){
            return false; 
        }
    }
    for (let index = 0; index< values1.length; index++) {
        if(values1[index] !== values2[index]){
            return false
        }
    }
    return true;

  }
  //*Задание 3. Напишите функцию findKeyByValue, которая принимает объект и значение в качестве аргументов и возвращает первый ключ, соответствующий переданному значению. Если значение не найдено, верните null.*/
  
  function findKeyByValue (Obj,value) {
    const keys = Object.keys(Obj);
    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]] === value) {
          return keys[i];
        }
      }
      return null;
  }

  /**У вас есть объект productInfo с информацией о продукте, включая его наименование, цену и наличие на складе. Напишите функцию printProductDetails, которая принимает этот объект в качестве аргумента и выводит в консоль сообщение вида: "<товар> - <цена>, товар на складе: <да/нет>", где "да" или "нет" зависит от наличия товара на складе.
   */
  function printProductDetails(productInfo) {
    console.log (`${productInfo.name} - $${productInfo.price}, товар на складе: ${productInfo['in stock'] ? 'Да' : 'Нет'}`);
  }


  const productInfo = {
    name: 'Smartphone',
    price: 699,
    'in stock': true
  };
  
  printProductDetails(productInfo); //"Smartphone - $699, товар на складе: Да"