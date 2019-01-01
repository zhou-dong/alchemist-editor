import React from 'react';

import AceEditor from 'react-ace';
// import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';

import './App.css';

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
      editorProps={{ $blockScrolling: true }}
    />
  );
};

const execute = () => {
  console.log(code);
  import("alchemist-core").then(alchemist => {
    const Stack = alchemist.Stack;
    eval(code);
  })
}

const App = () => {
  return (
    <div className="App" >
      <header className="App-header" >
        {editor()}
        <button onClick={execute}>
          RUN
        </button>
      </header>
    </div>
  );
};

export default App;
