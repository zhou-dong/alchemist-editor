import React from "react";
import "./App.css";
import Pages from "./pages";

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

function onChange(newValue: any) {
  demo = newValue;
}

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

const App = () => {
  return (
    <React.Fragment>
      <Pages onChange={onChange} fontSize={14} defaultValue={demo} execute={execute} />
    </React.Fragment>
  );
};

export default App;
