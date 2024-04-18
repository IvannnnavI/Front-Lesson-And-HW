/*Задание 1
У вас есть массив объектов:
Используйте методы массивов

Создайте на основе старого массива новый массив объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]
Используйте методы массивов*/

const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];
const heroes = starWarsHeroes.map(hero => ({
    name: hero.name,
    isJedi: hero.isJedi
}));
console.log(heroes)

/*Задание 1.2
Создайте новый массив с джедаями младше 40 лет*/
const youngJed = starWarsHeroes.filter(hero => hero.isJedi && hero.age < 40);
console.log(youngJed)

/*Задание 1.3
Посчитайте возраст всех джедаев*/
const totalAgesJedi  = starWarsHeroes.reduce((total,hero)=> {
    return hero.isJedi ? total + hero.age : total;
}, 0);
console.log(totalAgesJedi)

/*Задание 1.4
Повысьте возраст героев на 10 лет*/
starWarsHeroes.forEach(hero => (hero.age += 10))
console.log(starWarsHeroes)

/*Задание 1.5
Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }*/
const renameAnakin = starWarsHeroes.map(hero=> {
    if (hero.name === 'Anakin Skywalker') {
        return {name: "Darth Vader" , isJedi: false, age: 50};
    }
    return hero;
});
console.log(renameAnakin);

/*Задание 1.6
Создайте массив с именами героев, у которых возраст больше 30 лет, преобразуйте каждое имя в верхний регистр и отфильтруйте имена, которые начинаются с буквы "A".
используйте .startsWith()*/
const megaSort = starWarsHeroes
.filter(hero => hero.age > 30)
.map(hero => hero.name.toUpperCase())
.filter(name => !name.startsWith('A'));

console.log(megaSort)




/*Задание 1.7
Выведите на экран сообщение для каждого героя, указывающее на его статус джедая, и добавьте к каждому сообщению его возраст.
Используйте тернарный оператор
Образец:
'Anakin Skywalker is a Jedi. Age: 25' 'Han Solo is not a Jedi. Age: 35'*/
const jediStatus = starWarsHeroes.map(hero => 
    `${hero.name} is ${hero.isJedi ? '' : 'not '}a Jedi. Age: ${hero.age}`
);
console.log(jediStatus)
