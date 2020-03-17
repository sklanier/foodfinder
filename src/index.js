import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.css';
import Main from "./Main/Main"

function App() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
ReactDOM.render(<App />, document.getElementById('root'));