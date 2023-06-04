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

> In React, ==**state**== refers to the data that is stored and managed within a component. State can be used to track user input, store the selected image index, and more

> The ==**useState**== Hook is used to add state to function components

> ==**Hooks**== are functions that live inside React’s functional components, that enable you to more easily “grab” and work with state, as well as the various React lifecycle events. Note that these can only live in functional components and are meant to replace the need for classes. They cannot live in standard JavaScript functions, except in the case of making your own custom hook.

> Hooks are a conciser and more straightforward way to organize code and manage state, making them a wonderful addition to your React toolbelt!
