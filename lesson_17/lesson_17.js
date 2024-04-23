//* Наследование в JS

// прототипы

const bicykle = {
    brand: 'Bergamot',
    price: 2000,
    drive() {
        console.log('Driving Bicykle ...')
    }
}

const mountainBike = {
    __proto__: bicykle,
    price: 300,
    speeds: 7
}

console.log(bicykle.price);
bicykle.drive()

mountainBike.drive()
console.log(mountainBike.price);


// * создайте объект vehicle с полями:

// - speed значение 40
// - capacity значение 4
// - и методом go() который выводит в консоль "Br-br-br-br!"

// создайте на основе:

// jeep() - со вместимостью 5, скорость 60
// numberOfDoors() - 2
//* роздайте метод accelerate() который увеличивает скорость на 5км

// вызовите метод go() у jeep
// Создание объекта vehicle с базовыми полями и методами, включая accelerate и stop
const vehicle = {
    speed: 40,
    capacity: 4,
    go: function() {
        console.log("Br-br-br-br!");
    },
    accelerate: function() {
        this.speed += 5;
        console.log(`Текущая скорость: ${this.speed} км/ч`);
    },
    stop: function() {
        this.speed = 0;
        console.log("стоим . Скорость 0.");
    }
};


const jeep = {
    __proto__: vehicle,
    capacity: 5,
    speed: 60, 
    numberOfDoors: 2 
};

jeep.go();
jeep.accelerate();
jeep.stop();


// классовое наследование
// синтаксический сахар для прототипов.

class Animal {
    constructor(age, name, color) {
        this.age = age
        this.name = name
        this.color = color
    }

    info() {
        console.log(`Меня зовут ${this.name}. Я цвета ${this.color} `)
        return 'ну вот и все ребята!'
    }
}

const monkey = new Animal (7,'Цезарь', 'monkey color')


monkey.info()

const reindeer = new Animal (1, 'Bamby', 'reindeer color')
reindeer.info()

// inheritance - отношение между классами
// extends  -способ наследование 

class Panda extends Animal {
    constructor(age,name,color,weight){
        super (age,name,color);
        this.weight = weight;
    }
    sleep() {
        console.log('Z-z-zz-z-z-z!');
    }
    eat() {
        this.weight += 1
    }
}

const po = new Panda(5, 'Po', 'Black and White', 50)
po.eat()
po.eat()
po.eat()

console.log(po.weight)
po.info()

// задание.

class Alcohol {
    constructor(title, strength, volume) {
        this.title = title;
        this.strength = strength;
        this.volume = volume;
    }

    drink() {
        console.log(`Приятно выпить ${this.title}`);
    }
    reduce() {
        this.volume -= 1;
    }
}


class Cognac extends Alcohol {
    constructor(title, strength, volume, age, country) {
        super(title, strength, volume);
        this.age = age;
        this.country = country;
    }
}


class Martini extends Alcohol {
    constructor(title, strength, volume, sugarContent) {
        super(title, strength, volume);
        this.sugarContent = sugarContent;
    }
}


const myCognac = new Cognac("Hennessy", 40, 750, 12, "France");
myCognac.drink(); 


const myMartini = new Martini("Martini Bianco", 15, 500, 8);
myMartini.drink(); 