import React from 'react';
import './App.css';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue: any) {
  console.log('change', newValue);
}

const editor = () => {
  return (
    <AceEditor
      mode="java"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  );
};

const App = () => {
  return (
    <div className="App" >
      <header className="App-header" >
        {editor()}
      </header>
    </div>
  );
};

export default App;
