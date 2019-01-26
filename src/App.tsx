import React from "react";

import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/github";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Table } from "../node_modules/@material-ui/core";

enum Action {
  Push, Peek, Pop, Size, IsEmpty
}

interface ActionHold {
  action: Action
  value?: any
}

class Actions {
  private _actions: ActionHold[];

  constructor() {
    this._actions = [];
  }

  push(content: any) {
    this._actions.push({ action: Action.Push, value: content });
  }

  peek(): any {
    this._actions.push({ action: Action.Peek });
  }

  pop(): any {
    this._actions.push({ action: Action.Pop });
  }

  size(): number {
    this._actions.push({ action: Action.Size });
    return 1;
  }

  isEmpty(): boolean {
    this._actions.push({ action: Action.IsEmpty });
    return true;
  }

  get actions(): ActionHold[] {
    return this._actions;
  }
}

class Stack {
  private table: HTMLTableElement;

  constructor(hoster: HTMLElement) {
    this.table = document.createElement("TABLE") as HTMLTableElement;
    hoster.appendChild(this.table);
  }

  push(content: any): void {
    const row = this.table.insertRow(0);
    const cell = row.insertCell(0);
    cell.innerHTML = content;
  }

  peek(): any {
    return this.table.rows[0].cells[0].innerHTML;
  }

  pop(): any {
    const result = this.peek();
    this.table.deleteRow(0);
    return result;
  }

  size(): number {
    return this.table.rows.length;
  }

  isEmpty(): boolean {
    return this.table.rows.length == 0;
  }
}

class RealStack {

  private timerId: any;
  private index: number;
  private actions: Actions;
  private stack: Stack;
  constructor(hoster: HTMLElement) {
    this.index = 0;
    this.timerId = -1;
    this.actions = new Actions();
    this.stack = new Stack(hoster);
  }

  push(content: any): void {
    this.actions.push(content);
  }

  peek(): void {
    this.actions.peek();
  }

  pop(): void {
    this.actions.pop();
  }

  size(): void {
    this.actions.size();
  }

  isEmpty(): void {
    this.actions.isEmpty();
  }

  run(): void {
    this.timerId = setInterval(() => {
      if (this.index >= this.actions.actions.length) {
        clearInterval(this.timerId);
      } else {
        this.decode(this.actions.actions[this.index]);
        this.index++;
      }
    }, 1000)
  }

  decode(action: ActionHold): void {
    if (action.action === Action.Push) {
      this.stack.push(action.value);
    } else if (action.action === Action.Peek) {
      this.stack.peek()
    } else if (action.action === Action.Pop) {
      this.stack.pop();
    } else if (action.action === Action.Size) {
      this.stack.size();
    } else if (action.action === Action.IsEmpty) {
      this.stack.isEmpty();
    }
  }
}

const demo = `
const h = document.getElementById("display");
const stack = new RealStack(h);

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
stack.run();
`

let code = "";
function onChange(newValue: any) {
  code = newValue;
}

const editor = () => {
  return (
    <AceEditor
      mode="javascript"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      value={demo}
      editorProps={{ $blockScrolling: true }}
    />
  );
};

const App = () => {

  const execute = () => {
    import("alchemist-core").then(alchemist => {
      // const Stack = alchemist.Stack;
      // const Queue = alchemist.Queue;
      try {
        eval(code);
      } catch (error) {
        console.error(error.message);
      }
    })
  }

  return (
    // <div className="App" >
    //   <header className="App-header" >
    //     <button onClick={execute}>
    //       RUN
    //     </button>
    //     {editor()}
    //   </header>
    // </div>
    <Grid container>
      <Grid item xs={8} className="App-header">
        {editor()}
        <button onClick={execute}>RUN</button>
      </Grid>
      <Grid item xs={4}>
        <Paper id="display"></Paper>

      </Grid>
    </Grid>
  );
};

export default App;
