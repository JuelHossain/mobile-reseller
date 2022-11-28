const blogs = [
  {
    question: "What are the different ways to manage a state in a React application?",
    answer:
      "there is multiple ways to mange state in react application. we can manage state in local state, global state, server state, url state . Local state is data we manage in one or another component. Global state is data we manage across multiple components.Data that comes from an external server that must be integrated with our UI state.Data that exists on our URLs, including the pathname and query parameters.",
  },
  {
    question: " How does prototypical inheritance work?",
    answer:
      "Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.",
  },
  {
    question: "What is a unit test? Why should we write unit tests?",
    answer:
      "A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. ",
  },
  {
    question: "React vs. Angular vs. Vue?",
    answer:
      "React offers a Getting Started guide that should help one set up React in about an hour.Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC.Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option ",
  },
];
export default blogs;
