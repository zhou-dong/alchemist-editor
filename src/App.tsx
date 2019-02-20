import React from "react";
import Resizable from "re-resizable";
import Button from "@material-ui/core/Button";
import PlayArrow from "@material-ui/icons/PlayArrow";

import "./App.css";

import Editor from "./Editor";
const demo = `const parentHTML = document.getElementById("display"); 
const input = "(1+(4+5+2)-3)+(6+8)";

const index = new Index(parentHTML);
const log = new Stack(parentHTML, null, "stack3");

const stack1 = index.createStack("stack1");
const stack2 = index.createStack("stack2");

input.split("").forEach(char => {
    switch (char) {
        case "(":
            log.push("(");
            stack1.size();
            break;
        case ")":
            stack1.peek();
            log.push(")");

            const num2 = parseInt(stack1.pop());
            log.push(num2);

            const operator = stack2.pop();
            log.push(operator);

            const num1 = parseInt(stack1.pop());
            log.push(num1);

            if (operator === "-") {

                log.push("result of " + num1 + " - " + num2);
                stack1.push(num1 - num2);
            } else if (operator === "+") {

                log.push("result of " + num1 + " + " + num2);
                stack1.push(num1 + num2);
            }
            break;
        case "+":

            log.push("+");
            stack2.push("+");
            break;
        case "-":
            
            log.push("-");
            stack2.push("-");
            break;
        default: 
            log.push(char);
            stack1.push(char);
    }
});

while (!stack2.isEmpty()) {

  const num2 = parseInt(stack1.pop());
  log.push(num2);

  const operator = stack2.pop();
  log.push(operator);

  const num1 = parseInt(stack1.pop());
  log.push(num1);

  if (operator === "-") {

      log.push("result of " + num1 + " - " + num2);
      stack1.push(num1 - num2);
  } else if (operator === "+") {

      log.push("result of " + num1 + " + " + num2);
      stack1.push(num1 + num2);
  }
}

const speed = 2000;

log.play(speed);
index.play(speed);
console.log(stack1.peek());

`;

let code = demo;
function onChange(newValue: any) {
  code = newValue;
}

const execute = () => {

  (document.getElementById("display") as HTMLElement).innerHTML = ""

  import("alchemist-core").then(alchemist => {
    const Stack = alchemist.Stack;
    const Queue = alchemist.Queue;
    const Index = alchemist.Index;

    try {
      eval(code);
    } catch (error) {
      console.error(error.message);
    }
  })
}

const height = 720;
const backgroundColor = "#002B36";

const editor = (
  <Resizable
    defaultSize={{ height, width: "50%" }}
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
