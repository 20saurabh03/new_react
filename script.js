const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading2"
);
const container = React.createElement(
  "h1",
  {
    id: "container",
  },
  [heading, heading2]
);
console.log("container");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
