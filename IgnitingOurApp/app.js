import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("p", { key: "p1", id: "paraOne" }, "this is para one"),
//     React.createElement("p", { key: "p2", id: "paraTwo" }, "this is para two"),
//   ]),
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//  # React Element => React Element => js object => HTMLelement(render)

const heading = React.createElement(
  "h1",
  { id: "headingOne" },
  "This is Dewang",
);

// console.log(heading);

//JSX (transpiled before it reach the js ) -> parcle -> babel

// jsx code =>babel transpile to React.createElement - js object => HTMLElement(render)

// How this code running

// React Element
let Title = () => {
  return (
    <h1 id="headingOne" className="headingOne">
      This is jsx heading 😎
    </h1>
  );
};

// React Component

// React Functional component

let HeadingFunctionalComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>This is react functional component😎</h1>
    </div>
  );
};

// console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingFunctionalComponent />)