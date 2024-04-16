/*### Задание 1
Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.*/
const getElementAtIndex = (array, index) => array[index]
const myArray = [5, 6, 7, 8, 9]
console.log(getElementAtIndex(myArray, 2))

/*### Задание 2 *
Создайте функцию, которая бы принимала бы следующие параметры:
- код погоды
- функция decode, которая дает расшифровку погоды по коду.

Функция должна возвращать строку, описывающую погоду.
### Таблица соответствия код-описание:
 - SQ – шквал
 - PO – пыльный вихрь
 - FC - торнадо
 - BR – дымка (видимость от 1 до 9 км)
 - HZ – мгла (видимость менее 10 км)
 - FU – дым (видимость менее 10 км)
 - DS - пыльная буря (видимость менее 10 км)
 - SS - песчаная буря (видимость менее 10 км)

Подсказка: удобно использовать в одном из методов switch-case:
```
switch (expression) {
    case value1:
        <код>
    case value2:
        <код>
// …
    case valueN:
        <код>
    default:
        <код>
}
```*/
function kodPogodu(weatherCode, decode) {
    return decode(weatherCode);
  }
  
  function decode(weatherCode) {
    switch (weatherCode) {
      case 'SQ':
        return 'шквал';
      case 'PO':
        return 'пыльный вихрь';
      case 'FC':
        return 'торнадо';
      case 'BR':
        return 'дымка (видимость от 1 до 9 км)';
      case 'HZ':
        return 'мгла (видимость менее 10 км)';
      case 'FU':
        return 'дым (видимость менее 10 км)';
      case 'DS':
        return 'пыльная буря (видимость менее 10 км)';
      case 'SS':
        return 'песчаная буря (видимость менее 10 км)';
      default:
        return 'Неизвестный код погоды';
    }
  }
  console.log(kodPogodu('SQ', decode));
  console.log(kodPogodu('SS', decode));
  console.log(kodPogodu('GG', decode));

  //* ### Задание 3. Напишите функцию sumNumbers, которая принимает на вход массив чисел и возвращает строку, в которой перечислены все числа из массива и их сумма. Используйте синтаксис function expression, цикл while, шаблонные строки.console.log(sumNumbers(numbers)); // Ожидаемый результат: "Числа: 1, 2, 3, 4, 5. Сумма: 15." */

const sumNumbers = function (numbers) {
    let i = 0;
    let sum = 0;
    let listn = '';
    while (i < numbers.length) {
      sum += numbers[i];
      listn += numbers[i];
      if (i < numbers.length - 1) {
        listn += ", "
      }
      i++
    }
    return `Числа: ${listn}. Сумма: ${sum}.`
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log(sumNumbers(numbers));
  