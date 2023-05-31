import { firstName, greeting as greetFun } from './code.js';

// console.log(firstName);
// console.log(greetFun('lilo'));

// this is another syntax for defining an object by "new" keyword
const obj = new Object({
	name: 'Khaled',
	age: 20,
});

// i can add a function or method as a property to my object
obj.greet = function () {
	return 'Hello';
};

// console.log(obj.greet());
// console.log(obj);

// console.log(obj);

// i can also use new to define an array
let arr = new Array(1, 2, 'hello');
// console.log(arr[2]);

class state {
	constructor(name, age, salary) {
		this.name = name;
		this.age = age;
		this.salary = salary <= 20000 ? (salary += 3000) : salary;
		this.msg = () => {
			return `person name is ${this.name} and his age is ${this.age} and his salary is ${this.salary}`;
		};
	}

	messegeMethod() {
		return `person name is ${this.name} and his age is ${this.age} and his salary is ${this.salary}`;
	}

	updateName(name) {
		this.name = name;
	}
}

let preson1 = new state('Khaled', 20, 20000);
let preson2 = new state('sayed', 24, 10000);
let preson3 = new state('mohsen', 26, 31000);

// console.log(preson1 instanceof constructor);
// console.log(preson1 instanceof state);

// console.log(preson1.name, preson1.age, preson1.age);
// console.log(preson2.name, preson2.age, preson2.age);
// console.log(preson3.name, preson1.age, preson1.age);

// console.log(preson1.messegeMethod());
// console.log(preson1.msg());

let num1 = 10;
let num2 = new Number(10);

// console.log(typeof num1, typeof num2);

// console.log(num1 instanceof Number);
// console.log(num2 instanceof Number);

// console.log(num1.constructor === Number);
// console.log(num2.constructor === Number);

// console.log(preson1.name);
// preson1.updateName('Hassan');
// console.log(preson1.name); //name updated it will print Hassan

// count idea with every object will created + static keyword to make my propery or method belongs to the class not the object + some trials to check what happening + all this with new class i will test on it

class car {
	// now count belongs to class
	static count = 0;
	constructor(type, color, model, price) {
		this.type = type;
		this.color = color;
		this.model = model;
		this.price = price;
		car.count++;
	}

	// belongs to class not object constrcutor
	static updateCarPrice() {
		// add 51000 on each car cuse everything todays is expensive;
		this.price += 51000;
	}
}

let car1 = new car('bmw', 'black', 'M8 2023', 2000000);
let car2 = new car('marcedes', 'black', 'benz 2023', 1500000);
let car3 = new car('borsh', 'white-sky', '2022', 6000000);

// console.log(car.count);
// console.log(car1.model);
// console.log(car2.type);
// console.log(car1.price);

//there is an error in this method (i think it's logical error)
car.updateCarPrice();

console.log(car1.price);
console.log(car2.price);
console.log(car3.price);
