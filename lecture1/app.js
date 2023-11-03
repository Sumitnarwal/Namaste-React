{
  /**
<div id="parent">
<div id="child">
<h1>I'm an h1 tag child1</h1>
<h2>I'm an h1 tag child1</h2>
</div>
<div id="child2">
<h1>I'm an h1 tag child2</h1>
<h2>I'm an h1 tag child2</h2>
</div>
</div>
*/
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag child1"),
    React.createElement("h2", {}, "I'm an h2 tag child1"),
    React.createElement("p", {}, "============================="),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "child" }, "I'm an h1 tag child2"),
    React.createElement("h2", { id: "child" }, "I'm an h2 tag child2"),
  ]),
]);

//const heading = React.createElement("h1", { id: "heading" }, "Hello World From javascript");
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
root.render(parent);
