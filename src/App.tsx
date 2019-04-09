import React, { ReactNode } from "react";
import "./App.css";
import Pages from "./pages";
import ReactMarkdown from "react-markdown";
import Editor from "./components/Editor";

// npm i -D @types/webpack-env
const webpackMarkdownLoader = require.context(`!raw-loader!./example/queue/`, false, /\.md$/, );

const defaultContent = webpackMarkdownLoader("./readme.md").default;

let demo = `// Queue Example

const capacity = 5;
const queue = new Queue(capacity);

for(let i = 0; i < capacity; i++){
  queue.offer(i + 1);
}

for(let i = 0; i < capacity; i++) {
  queue.poll();
}

queue.start(1000);
`;

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

class App extends React.Component<{}, State> {

  public readonly state = { content: defaultContent };

  private onChange = (newValue: string) => this.setState({ content: newValue });

  public render() {
    return (
      <React.Fragment>
        <Pages
          execute={execute}
          midNode={<ReactMarkdown source={this.state.content} />}
          rightNode={<Editor
            name="code.md"
            defaultValue={defaultContent}
            onChange={this.onChange}
            value={this.state.content}
            mode="markdown"
          />}
        />
      </React.Fragment>
    );
  }
};

export default App;
