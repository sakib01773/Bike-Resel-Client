import React from 'react';

import "./Blog.css"

const Blog = () => {

    return (
        <div className='container mx-auto my-20 grid lg:grid-cols-2 gap-10'>

            <div className="card w-full  shadowbox bg-gray-400 text-primary-content my-10 ">
                <div className="card-body">
                    <h1 className="card-title">1.What are the different ways to manage a state in a React application?

                    </h1>
                    <p> React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app. Therefore, this article will clearly discuss the types of states such as Logical, Server, Form, Navigation, and Browser and the main ways to handle them. Also, it will help 25.12% of the developers who would like to learn React in the future.</p>

                </div>
            </div>

            <div className="card w-full  shadowbox bg-gray-400 text-primary-content my-10">
                <div className="card-body">
                    <h1 className="card-title">2.  How does prototypical inheritance work?</h1>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object. When it comes to inheritance, JavaScript only has one construct: objects. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</p>

                </div>
            </div>

            <div className="card w-full  shadowbox bg-gray-400 text-primary-content my-10">
                <div className="card-body">
                    <h1 className="card-title">3.What is a unit test? Why should we write unit tests?</h1>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.</p>

                </div>
            </div>

            <div className="card w-full  shadowbox bg-gray-400 text-primary-content my-10">
                <div className="card-body">
                    <h1 className="card-title">4. React vs. Angular vs. Vue?</h1>
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively. </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;