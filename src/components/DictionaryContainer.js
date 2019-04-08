import React, { Component } from 'react';
const firebase = require("firebase");

class DictionaryContainer extends Component {
  state={
    english: true,
    isReadOnly: false,
    givenInput: ''
  }

  render() {

    return (
      <div>
       <div className="dictionary-buttons-container">
        <button className="btn">Translate To Dari</button>
        <button className="btn">Translate To English</button>
       </div>

       <div className="input-container">
        <textarea className="inputform"/>
       </div>
      </div>
    );
  }

}

export default DictionaryContainer;
