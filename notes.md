<center><h1>React summary documention</h1></center>___

## React Introduction documention:

> **==routing==** refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

> **==data fetching==** refers to retrieving data from an API or server and displaying it on the client-side.

> **==JavaScript bundle==** is a file containing all the code needed to run a JavaScript application. It is created by bundling together all the JavaScript files that make up an application, along with any other assets that are required, such as images or stylesheets. The bundle is then loaded into the browser and executed by the JavaScript engine.

> **==Server-side rendering (SSR)==** refers to the process of rendering a client-side JavaScript application on the server, rather than in the browser. This can improve the performance of the application, especially for users on slower connections or devices.

---

<!-- Section 1 getting-started -->

## React section 1 (getting-started):

> _react is a js libary work on client-side._

> **==imperative approach==** :
> the approch that programming languges as vinalla (without any framework or lib) used and it's all about writing a code by descriping everything and do every step manually step after step and action after action and by this approch we almost reinvent the wheel.

> react is all about spiliting your applaction into small components or small blocks where every component have a clear task therefore code stays maintainable and manageable.

> React gives us a higher level syntax where we write code in a declarative way **==(declarative approach)==** , declarative components and focused approch
> so we just define what is end goal we wanna see on the screen by creating custom html elements and react will do the rest.

> -we can use React to control parts of an HTML page or all html page.

> **==widget approach==** :
> means that react controls only parts of an html page.

> **==SPA(single page applaction) approach==** :
> we use react to control (everything on the screen) or even switching between pages but it's just one html page do this switching to change what's visible on the screen and therefore we never request a second HTML page. And that often leads to a smoother UI and a better user experience. and this approch is more common to control.

> React not used alone we almost of times use a third party lib or framework with it to get more power and more features that not built into react like :
> ==-next js==
> ==-redux.==

---

<!-- section 2 - javascript refresh -->

##Section 2 (js refresh):

> -arrow function solved more issues with **_=="this"==_** keyword.

> ### Js modules import and export :
>
> ![modules](https://samanthaming.gumlet.io/tidbits/79-module-cheatsheet.jpg.gz?format=auto)

> **_Classes are blueprints for objects_**

>

---

## Section 3 (React basics and component)

> A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

> React components are JavaScript functions that return markup

> React component names must always start with a capital letter, while HTML tags must be lowercase.

> ==**JSX**== :
> JSX is not HTML, but a syntax extension to JavaScript used in ReactJS to easily write HTML and JavaScript together, also it's allows writing JavaScript that looks similar to HTML,

> JSX is used to create HTML elements as a JavaScript code that will be placed inside the DOM without using createElement() or appendChild() methods

> In React, a ==**composition**== refers to the practice of combining multiple smaller components together to build larger and more complex user interfaces. It allows you to break down your UI into reusable and independent parts, making it easier to manage and maintain your codebase.

> In React, ==**props**== (short for "properties") are used to pass data from a parent component to its child component. Props are read-only and cannot be modified by the child component. This concept allows for the composition of reusable and modular components.

> ==`props.children`== the value of it will always be the content between the opening and closing tag for this component we put it inside the chilcomponentd that we want to put content between it's opening and closing tag and this component called (==wrapper component==)
> look to the code below to understand

```js
function Component(props) {
	return <div>{props.children}</div>;
}
```

> jsx is a syntax suger cuse under the hood the jsx code transformed to a methods that called in react object in the import file
> `import React from 'react'`

**another way to write react code rather than jsx (our jsx transformed to this way) :**

```js
return React.createElement(
	'div',
	{},
	React.createElement('h2', { className: 'lilo' }, "Let's get started"),
	React.createElement(ExpenseCalls, { expenses: expenses })
);
```

this code was originally jsx code like this:

```js
return (
	<div>
		<h2 className='lilo'>Let's get started</h2>
		<ExpenseCalls expenses={expenses}></ExpenseCalls>
	</div>
);
```

## Section 4

> In React, ==**state**== refers to the data that is stored and managed within a component. State can be used to track user input, store the selected image index, and more

> The ==**useState**== Hook is used to add state to function components

> ==**Hooks**== are functions that live inside React’s functional components, that enable you to more easily “grab” and work with state, as well as the various React lifecycle events. Note that these can only live in functional components and are meant to replace the need for classes. They cannot live in standard JavaScript functions, except in the case of making your own custom hook.

> Hooks are a conciser and more straightforward way to organize code and manage state, making them a wonderful addition to your React toolbelt!

> it's a name conveniton that we name our function that respond to an event with `clickHandler` or like that
> ex: `function clickHandler() {block of code}`

> React parses all the project code 1 time
> when i use the useState hook react reparse this component again and compare the component with the state with prevous code state and change what should changed without rerender or reload the page. ==**this how state works in react and how react works**==

> react don't care more about the varibles in my component and will not change anything in the document even the data changed that's behvior bacasue the prevous reason which is ==**react parse and render the code only once**== and for this reason we use the hooks in our code to make it dynamic

> `useState` ==**React hook**== let me add a state to my component
> `useState` also return an array from 2 element first is the initialState that i already set it in the beginning when i created the state and second element is a function that recive the value i want to set
> so this is the way how we create a `useState` by destrcturing
> `const [state, setState] = useState(initialState)`

> to use `useState` i should call it in my top level component
> `import {useState} from 'react'`

> **important** The `setState` function only updates the state variable for the next render. If you read the state variable after calling the set function, you will still get the old value that was on the screen before your call.

> `useState` is a per component intance basis that's means that we have spearte state even we create component more than one

> ==**two-way binding**== is the synchronization of data between a component's state and its UI elements. This is achieved by using a controlled component (the component that use two way binding), which renders a form element whose value is controlled by React. The value of the form element is set to the state value, and an onChange event handler updates the state value when the user interacts with the element.
