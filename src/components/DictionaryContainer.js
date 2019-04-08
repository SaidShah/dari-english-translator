import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';


class DictionaryContainer extends Component {
  state={
    english: true,
    isReadOnly: false,
    givenInput: ''
  }

  handleClick=(givenTerm,language)=>{
    if(language==="toDari"){
      translateEnglish(givenTerm)
    }else if(language==="toEnglish"){
      translateDari(givenTerm)
    }
  }

  handleChange=(e)=>{
    this.setState({givenInput:e.target.value})
  }

  render() {

    return (
      <div>
       <div className="dictionary-buttons-container">
        <button className="btn" onClick={()=>this.handleClick(this.state.givenInput,"toDari")}>Translate To Dari</button>
        <button className="btn" onClick={()=>this.handleClick(this.state.givenInput,"toEnglish")}>Translate To English</button>
       </div>

       <div className="input-container">
       <h2 className="input-label">Your Text</h2>
        <textarea className="inputform" value={this.state.givenInput} name="givenInput" onChange={this.handleChange}/>
       </div>
       <div className="input-container">
       <h2 className="output-label">Translation</h2>
        <textarea className="outputform" readOnly={true} id="translation"/>
       </div>
      </div>
    );
  }

}

export default DictionaryContainer;

function translateDari(givenTerm){

}

function translateEnglish(givenTerm){

}
