/**Создайте классы: Plant, Rose.
Роза должна наследовать Растение. Пусть у растения будут поля:
рост,
возраст.
И метод grow, который увеличивает его рост на 10 см.
У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод. */

class Plant {
    constructor(growth, age) {
        this.growth = growth;
        this.age = age;
    }
    grow() {
        this.growth += 10
        console.log(`Растение выросло на 10 см. Текущий рост: ${this.growth} см.`)
    }
}

class Rose extends Plant {
    constructor(growth, age, numberOfFlowers) {
        super(growth, age);
        this.numberOfFlowers = numberOfFlowers;
    }
}

const roteRose = new Rose(35, 1, 3);

roteRose.grow();
console.log(`Количество бутонов на розе: ${roteRose.numberOfFlowers}`);

