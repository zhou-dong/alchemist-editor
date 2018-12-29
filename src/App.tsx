import React from 'react';
import './App.css';
import { Stack } from "alchemist-core";

import brace from 'brace';
import AceEditor from 'react-ace';


import 'brace/mode/javascript';
import 'brace/theme/github';

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
  console.log("======result=======");
  eval(code);
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
