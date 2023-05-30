import { firstName } from './code.js';

console.log(firstName);
// console.log(greeting('lilo'));

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
