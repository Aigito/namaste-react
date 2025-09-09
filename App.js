import React from "react";
import ReactDOM from "react-dom/client";

//* React Component Composition

const JsxHeading = () => (
  <h1 id="heading" className="head" tabIndex="5">
    Writting JSX inside of JS file
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <JsxHeading />
    <h1 className="heading">
      Namaste React Functional Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);