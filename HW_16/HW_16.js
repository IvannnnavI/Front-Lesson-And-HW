//У вас есть массивы объектов:

const heroes = [
  { hero: 'Iron Man', name: 'Tony Stark', age: 50, isAvenger: true },
  { hero: 'Captain America', name: 'Steve Rogers', age: 110, isAvenger: true },
  { hero: 'Thor', name: 'Thor Odinson', age: 1500, isAvenger: true }
];

const villains = [
  { hero: 'Thanos', name: 'Thanos', age: 1000, isAvenger: false },
  { hero: 'Loki', name: 'Loki Laufeyson', age: 1052, isAvenger: false }
];

/*Задание 1
Объедините два массива героев в один и отсортируйте по возрасту*/
const einheim = [...heroes, ...villains].sort((a, b) => a.age - b.age);
console.log(einheim);

//* решение 2
const einheim2 = heroes.concat(villains).sort((a,b) => a.age - b.age);
console.log(einheim2);

/*Задание 2
Замените имя героя "Captain America" на "The First Avenger" и увеличьте его возраст на 10 лет*/
const changeName = einheim.find(name => name.hero === 'Captain America');
if (changeName) {
    changeName.hero = 'The First Avenger';
    changeName.age += 10;
}
console.log(einheim)


//* решение 2
einheim2.forEach(character => {
    if (character.hero === 'Captain America') {
      character.hero = 'The First Avenger';
      character.age += 10;
    }
  });
  console.log(einheim2)

/*Задание 3
Напишите функцию getRandomCharacter, которая возвращает случайного персонажа в строке: Если это герой функция вернет: Congratulations! You got a hero: Iron Man! А если злодей: Attention! Thanos! Call the Avengers!*/
function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random()*einheim.length);
    const name = einheim[randomIndex]
    if(name.isAvenger) {
        return `Congratulations! You got a hero: ${name.hero}!`;
    }else {
        return `Attention! ${name.hero}! Call the Avengers!`;
    }
}
console.log(getRandomCharacter());

//* решение 2
function getRandomCharacter2() {
    const randomHero = einheim2[Math.floor(Math.random() * einheim2.length)];
    const message = randomHero.isAvenger ? 'Congratulations! You got a hero:' : 'Attention! Call the Avengers!';
    return `${message} ${randomHero.hero}!`;
  }
  console.log(getRandomCharacter2());

/*Задание 4
Создайте функцию getHeroAges(heroes), которая принимает массив героев
Функция должна выполнить следующие действия:
Отфильтровать героев, чьи имена начинаются с буквы "T". Отсортировать отфильтрованных героев по возрастанию их возраста. Получить массив возрастов отсортированных героев. Вывести полученный массив возрастов в обратном порядке.*/
const getHeroAges = (heroes) => {
    return heroes
      .filter(hero => hero.name.startsWith('T'))
      .sort((a, b) => a.age - b.age)
      .map(hero => hero.age)
      .reverse();
  }
  
  console.log(getHeroAges(heroes));


//* решение 2
  function getHeroAges2(heroes) {
    const tHeroes = heroes.filter(hero => hero.name[0] === 'T');
    tHeroes.sort((a, b) => a.age - b.age);
    const ages = tHeroes.map(hero => hero.age);
    return ages.reverse();
  }
  console.log(getHeroAges2(heroes));