import React from "react";
import ReactDOM from "react-dom/client";

//* Rendering React Element (stored as a JS variable) inside of a React Component

const elem = <span>Example</span>

const JsxHeading = () => (
  <h1 id="heading" className="head" tabIndex="5">
    Writting JSX inside of JS file
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {elem}
    <JsxHeading /> //* This works
    {JsxHeading()} //* This also works
    <h1 className="heading">
      Namaste React Functional Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);