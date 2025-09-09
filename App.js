import React from "react";
import ReactDOM from "react-dom/client";


const JsxHeading = () => (
  <h1 id="heading" className="head" tabIndex="5">
    Writting JSX inside of JS file
  </h1>
);

//* JS code inside of JSX

const number = 100;

const HeadingComponent = () => (
  <div id="container">
    {number}
    <h1 className="heading">
      Namaste React Functional Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);