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

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a h1"),
    React.createElement("h2", {}, "I am a h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am also a h1"),
    React.createElement("h2", {}, "I am also a h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
