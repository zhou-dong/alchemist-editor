import React from "react";
import "./App.css";
import Pages from "./pages";

let demo = `// Basic stack operators

const parentHTML = document.getElementById("display");
const stack = new Stack(parentHTML, null, "stack1");

stack.push(0);
stack.push(1);
stack.pop();

stack.push(2);
stack.pop();

stack.push(3);
stack.pop();

stack.push(4);
stack.push(4);
stack.push(4);

stack.pop();
stack.pop();
stack.pop();
stack.pop();

stack.play(500);
`;

function onChange(newValue: any) {
  demo = newValue;
}

const execute = () => {

  (document.getElementById("display") as HTMLElement).innerHTML = ""

  import("alchemist-core").then(alchemist => {
    const Stack = alchemist.Stack;
    const Queue = alchemist.Queue;
    const Index = alchemist.Index;

    try {
      eval(demo);
    } catch (error) {
      console.error(error.message);
    }
  })
}

const App = () => {
  return (
    <React.Fragment>
      <Pages onChange={onChange} fontSize={14} defaultValue={demo} execute={execute} />
    </React.Fragment>
  );
};

export default App;
