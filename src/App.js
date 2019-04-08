import React, { Component } from 'react';
import './App.css';
import DictionaryContainer from './components/DictionaryContainer'

class App extends Component {
  render() {
    return (
      <div>
        <div className="head-container">
          <h1>Dari to English and English to Dari</h1>
          <h1>Dictionary</h1>
        </div>
        <DictionaryContainer/>

      </div>
    );
  }
}

export default App;
