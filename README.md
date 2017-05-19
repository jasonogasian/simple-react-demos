This project contains three example React applications.

## Demos
* reactdemo - a simple demo showing the use of state and props. This also shows the use of Javascript classes and  arrow functions.
* routerdemo - adds react-router to the previoud example. This allows us to control the app via the URL.
* reduxdemo - a demo showing a simple use case for redux used with react to keep app state in a global redux store.

## How to Use This Project
Simply open any of the demos and run `npm install` followed by `npm start` to see them in action. You should go through all the code and read the comments; I put them there just for you!

### Motivation
I love React. I like the way ti forces your code to be organized and compartmentalized. I like that you get re-rendering when state changes. I like that the entire lifecycle of a component is available to you to hook into. In short, I think React is the bees knees and I suites my style of programming very well.
I chose to make this repository to show simple usage of react, as well as react-router and redux, I'll know explain why I chose to incoporate these two modules into most of my projects.

#### React Router
When you have a single page application (SPA) you have multiple views that can be shown. I wanted a way to be able to link to any of these views directly and I found react-router. React router allowed me to define routes in my app that would cause specific React components to be rendered based on the URL the user navigated to. Now I can "deep link" into my app as well as have bookmarkable links. Good stuff!

#### Redux
React's usage of component state is powerful; but it can also be clunky. When you have state that needs to be shared by more than a single component you end up passing it around via props every which way; not my idea of clean code. Enter Redux: a way to manage global app state. Redux's global state "store" can be made available to any React component through the use of the react-redux module by wrapping your React components in "containers" that map Redux state to the component.
There's a great discussion about when to use React component state versus the Redux store [here](https://github.com/reactjs/redux/issues/1287).

## More Information

#### Tutorial
This [tutorial from css-tricks](https://css-tricks.com/learning-react-router/) looks promising; check it out!

#### Redux
* [Tutorial Videos](https://egghead.io/courses/getting-started-with-redux) by Dan Abrimov

#### React Router
* [Docs](https://reacttraining.com/react-router/)
