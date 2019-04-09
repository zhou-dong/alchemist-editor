import React, { ReactNode } from "react";
import "./App.css";
import Pages from "./pages";
import { MarkdownEditor, JavascriptEditor, Mode } from "./components/Editor";

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
  content: string;
}

// const defaultName = "code.js";
// const getExtension = (filename: string): string | undefined => filename.split(".").pop();

// export default (props: AceEditorProps) => {
//     if (!props.name) {
//         props.name = defaultName;
//     }
//     switch (getExtension(props.name)) {
//         case "js": return createEditor(Mode.Javascript, props);
//         case "md": return createEditor(Mode.Markdown, props);
//         default: throw new Error("file name must have extension with .js or .md")
//     }
// };

class App extends React.Component<{}, State> {

  public readonly state = { content: readme };

  private onChange = (newValue: string) => {
    demo = newValue;
    // this.setState({ content: newValue });
  }
  public render() {
    return (
      <React.Fragment>
        <Pages
          execute={execute}
          mode={Mode.Markdown}
          content={this.state.content}
          rightNode={<JavascriptEditor
            name="code.md"
            defaultValue={demo}
            onChange={this.onChange}
            value={this.state.content}
          />}
        />
      </React.Fragment>
    );
  }
};

export default App;
