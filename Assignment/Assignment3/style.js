import React from "react";
import ReactDom from "react-dom/client"



// Using Nested Heading
const heading = React.createElement(
    "div",
    {className : "title"},
    [React.createElement("h1" ,{key:"one"} , "This is heading One"),
    React.createElement("h2" ,{key:"two"} , "This is heading two"),
    React.createElement("h3" ,{key:"three"} , "This is heading three")] 
);

console.log(heading);


let root = ReactDom.createRoot(document.getElementById("container"))

root.render(heading)


// Using Jsx
const container = (
    <div className="title">
        <h1>This is heading one using jsx</h1>
        <h2>This is heading two using jsx</h2>
        <h3>This is heading three using jsx</h3>
    </div>
)
console.log(container);
root.render(container)


// using function component
const Functionalcomponent = () => {
    return (
        <div id="container">
            <h1>This is heading one using functionalComponent</h1>
            <h2>This is heading two using functionalComponent</h2>
            <h3>This is heading three using functionalComponent</h3>
        </div>
    )
}

root.render(<Functionalcomponent />)


// Make header Component

const HeaderComponent = () => {
    return (
        <div id="header">
            <img id="logo"></img>
            <input 
            type="text" 
            placeholder="search....">
                
            </input>
            <img id="user"></img>
        </div>
    )
};

root.render(<HeaderComponent />)
