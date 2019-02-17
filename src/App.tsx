import React from "react";
import Resizable from "re-resizable";
import Button from "@material-ui/core/Button";
import PlayArrow from "@material-ui/icons/PlayArrow";

import Editor from "./Editor";
const demo = `const h = document.getElementById("display");
const stack = new Stack(h);

stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.run();
`

let code = demo;
function onChange(newValue: any) {
  code = newValue;
}

const execute = () => {
  import("alchemist-core").then(alchemist => {
    const Stack = alchemist.Stack;
    const Queue = alchemist.Queue;
    try {
      eval(code);
    } catch (error) {
      console.error(error.message);
    }
  })
}

const height = 520;
const backgroundColor = "#002B36";

const editor = (
  <Resizable
    defaultSize={{ height, width: "30%" }}
    enable={{ right: true }}
    style={{
      alignItems: "center",
      justifyContent: "center",
      borderRight: "solid 1px #ddd",
      float: "left",
      maxWidth: "90%"
    }}
  >
    <Editor onChange={onChange} defaultValue={demo} />
  </Resizable>
);

const display = (
  <div id="display" style={{
    backgroundColor,
    height,
    minWidth: "5%",
    color: "white",
  }}>
  </div>
);

const main = (
  <div style={{ width: "100%", height: "100%" }}>
    {editor}
    {display}
  </div>
);

const App = () => {
  return (
    <React.Fragment>
      <Button onClick={execute} variant="outlined">
        <PlayArrow>RUN</PlayArrow>Play
      </Button>
      {main}
    </React.Fragment>
  );
};

export default App;
