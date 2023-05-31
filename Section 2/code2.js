import { firstName, greeting as greetFun } from './code.js';

console.log(firstName);
console.log(greetFun('lilo'));

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
}

let preson1 = new state('Khaled', 20, 20000);
let preson2 = new state('sayed', 24, 10000);
let preson3 = new state('mohsen', 26, 31000);

// console.log(preson1 instanceof constructor);
// console.log(preson1 instanceof state);

console.log(preson1.name, preson1.age, preson1.age);
console.log(preson2.name, preson2.age, preson2.age);
console.log(preson3.name, preson1.age, preson1.age);

console.log(preson1.messegeMethod());
console.log(preson1.msg());
