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

class car extends state {
	// now count belongs to class
	static count = 0;
	constructor(name, age, type, color, model, price) {
		super(name, age); //now i call name and age properties from the state class by inheritance
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

let car1 = new car('khaled', 20, 'bmw', 'black', 'M8 2023', 2000000);
let car2 = new car('Ali', 20, 'marcedes', 'black', 'benz 2023', 1500000);
let car3 = new car('khaled', 20, 'borsh', 'white-sky', '2022', 6000000);

// console.log(car.count);
// console.log(car1.model);
// console.log(car2.type);
// console.log(car1.price);

//there is an error in this method (i think it's logical error)
car.updateCarPrice();

// console.log(car1.price);
// console.log(car2.price);
// console.log(car3.price);

// console.log(car1.name);

// the example that max give in lecture:

// i don't know what is the problem with this code actully
class Man {
	constructor() {
		this.namee = 'khaled';
	}

	sayHello() {
		return `hello ${this.namee}`;
	}
}

let man1 = new Man();
console.log(man1.sayHello());

// spreed operator (pull out) (copying) and rest operator (function arguments)

// spreed operator

// example 1
const myarr = [1, 2, 3, 4, 5];
const copiedArr = [...myarr, 6, 7];

/*
for (let index in copiedArr) {
	console.log(copiedArr[index]);
}
 */

//example 2
const myObj = {
	name: 'lilo',
	address: 'almatarya',
};

const myCopiedObj = {
	...myObj,
	phone: '01026163028',
};

// console.log(myCopiedObj);

// Rest operator (enter any amout of argument into an array then excute anything on this array inside your function)
let sum = 0;

const sumFunc = (...nums) => {
	nums.forEach((el, index, arr) => {
		sum += el;
	});

	return sum;
};

const funResult = sumFunc(5, 4, 3, 2);
// console.log(funResult);

// premitive and refrences values
const list = ['khaled', 'hello', 'okey'];
const copiedList = list;
list[1] = 'mohammed';
// console.log(copiedList[1]); // will output mohamed not hello cuse arrays and objects are refrence values (pointers to value not the value itself)

const objList = {
	name: 'hamdy',
};

const copiedObjList = objList;
objList.name = 'khaled';
// console.log(copiedObjList); //will output khaled

// if i like to save the value and a copy as primitive not refrence then i should use spreed operator
const copiedObjListV2 = { ...objList };
objList.name = 'mahmoud';
// console.log(copiedObjListV2);

const destArr = ['khaled', 'ahmed', 'samir'];
const [name1, , name3] = destArr; // destructing by position
// console.log(name1);
// console.log(name3);

const destObj = {
	name: 'lilo',
	age: 20,
};

const { name, age } = destObj;
// console.log(name);
// console.log(age);

const destObj2 = {
	name: 'Khaled',
	address: {
		city: 'cairo',
		street: 'alkblat street',
	},
};

const {
	address: { city },
	address: { street },
} = destObj2;

// console.log(city);
// console.log(street);

// combing destObj and destObj2 in one obj and replace the repeated property with last obj property (in this case objDest2)

const cominedObj = { ...destObj, ...destObj2 };
// console.log(cominedObj);

const sumAndMultiply = (a, b) => {
	return [a + b, a * b];
};

const [summ, multiplyy] = sumAndMultiply(5, 4);
console.log(summ);
console.log(multiplyy);
