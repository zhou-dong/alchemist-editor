import React, { ReactNode } from "react";
import "./App.css";
import Pages from "./pages";
import { readme, example } from "./example/queue/index";

let demo = example

const execute = () => {

  const parentHTML = document.getElementById("display") as HTMLElement
  parentHTML.innerHTML = ""

  import("alchemist-core").then(alchemist => {
    class Index extends alchemist.Index {
      constructor() {
        super(parentHTML)
      }
    }

    class Stack<T> extends alchemist.Stack<T> {
      constructor(size?: number, id?: string) {
        super(parentHTML, size, id);
      }
    }

    class Queue<T> extends alchemist.Queue<T> {
      constructor(size?: number, id?: string) {
        super(parentHTML, size, id);
      }
    }

    try {
      eval(demo);
    } catch (error) {
      console.error(error.message);
    }
  })
}

interface State {
  name: string
  content: string;
  onChange?: (value: string, event?: any) => void;
  isJs: boolean;
}

class App extends React.Component<{}, State> {

  private javascriptOnChange = (newValue: string) => {
    demo = newValue;
  }

  public readonly state = {
    name: "queue.js",
    content: demo,
    onChange: this.javascriptOnChange,
    isJs: true
  };

  private markdownOnChange = (newValue: string) => {
    this.setState({ content: newValue });
  }

  private handleSwitch = () => {
    if (this.state.isJs) {
      this.setState({ content: readme, onChange: this.markdownOnChange, isJs: false, name: "README.md" });
    } else {
      this.setState({ content: demo, onChange: this.javascriptOnChange, isJs: true, name: "queue.js" });
    }
  }

  public render() {
    return (
      <React.Fragment>
        <Pages
          handleSwitch={this.handleSwitch}
          play={execute}
          defaultValue={this.state.content}
          value={this.state.content}
          onChange={this.state.onChange}
          name={this.state.name}
        />
      </React.Fragment>
    );
  }
};

export default App;
