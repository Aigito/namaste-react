import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", { id: "heading", abc: "xyz" }, "Hello World from React!");

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     heading
//   )
// )

const parent = React.createElement("div", { id: "parent", key: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "I am a h1"),
    React.createElement("h2", { key: "h2-1" }, "I am a h2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "I am also a h1"),
    React.createElement("h2", { key: "h2-2" }, "I am also a h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
